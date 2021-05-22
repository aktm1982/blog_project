import Component from '../common/component'

export default class NavComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.element.addEventListener('click', this.navClickHandler.bind(this))
    }

    navClickHandler(e) {
        e.preventDefault()
        
        if(e.target.classList.contains('nav__item')) {
            this.element.querySelectorAll('.nav__item')
                .forEach(item => item.classList.remove('nav__item_active'))
        
            e.target.classList.add('nav__item_active')

            this.items.forEach(item => item.component.hide())

            let activeComponent = this.items.find(item => item.name === e.target.dataset.component)
            activeComponent.component.show()
        }
    }

    registerItems(items) {
        this.items = items
    }
}