import Component from '../common/component'
import Form from '../common/form'
import Validator from '../common/validator'
import {fbService} from '../services/fb.service'

export default class CreateComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        const create = document.querySelector('.form')
        create.addEventListener('submit', this.submitHandler.bind(this))

        const element = this.element.querySelector('form')
        const inputs = {
            'post-title': [Validator.isRequired, Validator.containsEscapeSign], 
            'post-content': [Validator.isRequired, Validator.isMinLength(6)]
        }
        this.form = new Form(element, inputs)
    }

    async submitHandler(e) {
        e.preventDefault()
        if(this.form.isValid()) {
            let inputData = {
                ...this.form.getValues(),
                'created-at': new Date().toLocaleDateString(),
                'post-type': this.form.element['post-type'].value
            }
            
            await fbService.savePost(inputData)
            this.form.clearInputs()
            alert("Данные успешно сохранены")
        }
    }
}