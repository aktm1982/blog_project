export default class Component {
    constructor(id) {
        this.element = document.getElementById(id)
        this.init()
    }

    init() {}

    onHide() {}

    onShow() {}

    hide() {
        this.element.classList.add('hidden')
        this.onHide()
    }

    show() {
        this.element.classList.remove('hidden')
        this.onShow()
    }
}