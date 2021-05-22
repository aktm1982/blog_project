import Component from '../common/component'
import LoaderComponent from './loader.component'
import {render} from '../views/post.render'
import {fbService} from '../services/fb.service'
import {TransformService} from '../services/transform.service'

export default class PostComponent extends Component {
    constructor(id) {
        super(id)
    }

    async init() {
        this.loader = new LoaderComponent("loader")
        await this.getPostsBody()

        this.element.addEventListener('click', this.favoritesLinkHandler.bind(this))
    }

    async onShow() {
        await this.getPostsBody()
    }

    onHide() {
        this.element.innerHTML = ''
        this.loader.hide()
    }

    async getPostsBody() {
        this.loader.show()
        this.fbData = await fbService.getPosts()
        const posts = TransformService.transformDataToArray(this.fbData)
        const postHtml = posts.map(post => render(post))
        this.loader.hide()

        this.element.insertAdjacentHTML('afterbegin', postHtml.join(''))
    }

    favoritesLinkHandler(e) {
        const postId = e.target.dataset.id
        
        if(postId) {
            let favorites = JSON.parse(localStorage.getItem('favorites')) || {}
            if(favorites.hasOwnProperty(postId)) {
                delete favorites[postId]
                e.target.textContent = 'Добавить в избранное'
            } else {
                favorites[postId] = this.fbData[postId]['post-title']
                e.target.textContent = 'В избранном'
            }

            localStorage.setItem('favorites', JSON.stringify(favorites))
        }
    }
}