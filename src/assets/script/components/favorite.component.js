import Component from '../common/component'
import {render} from '../views/post.render'
import {fbService} from '../services/fb.service'
import {TransformService} from '../services/transform.service'

export default class FavoriteComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.element.addEventListener('click', this.clickLinkHandler.bind(this))
    }

    onShow() {
        this.renderFavoritesList()
    }

    async renderFavoritesList() {
        this.element.textContent = ''
        const favorites = JSON.parse(localStorage.getItem('favorites'))

        if (Object.keys(favorites).length) {
            this.element.insertAdjacentHTML('afterbegin', 
            `<ul class="post-header favorites-list">
                ${Object.keys(favorites).map(
                    postId => {
                        return '<li class="favorites-list__item"><a class="favorites-list__link" data-id="' 
                        + postId + '" href="#">' + favorites[postId] + '</a></li>'
                    }).join('')
                }
            </ul>`)
        } else {
            this.element.insertAdjacentHTML('afterbegin', '<p class="post-header favorites-list">В данной категории пока нет объектов</p>')
        }
    }

    async clickLinkHandler(e) {
        e.preventDefault()
        const post = await fbService.getPostById(e.target.dataset.id)

        if(e.target.dataset.id) {
            post['post-id'] = e.target.dataset.id
            const favoritesHtml = render(post)

            this.element.textContent = ''
            this.element.insertAdjacentHTML('afterbegin', '<a class="favorites-list__link" data-link="back" href="#"><- назад</a>')
            this.element.insertAdjacentHTML('afterbegin', favoritesHtml)
        }

        if(e.target.dataset.link === "back") {
            this.renderFavoritesList()
        }
    }
}