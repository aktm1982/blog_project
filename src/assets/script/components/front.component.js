import Component from '../common/component'

export default class FrontComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        const startControl = this.element.querySelector(".start-control")
        startControl.addEventListener('click', this.clickHandler.bind(this))
    }

    clickHandler() {
        localStorage.setItem('visited', JSON.stringify(true))
        this.hide()
        this.container.show()
    }

    controlContainer(container) {
        this.container = container
        if(localStorage.getItem('visited')) {
            this.hide()
            this.container.show()
        } else {
            this.container.hide()
        }
    }
}