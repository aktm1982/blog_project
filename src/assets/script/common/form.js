export default class Form {
    constructor(element, inputs) {
        this.element = element
        this.inputs = inputs
    }

    getValues() {
        const data = {}

        Object.keys(this.inputs).forEach(key => {
            data[key] = this.element[key].value
        })

        return data;
    }

    setError(key, validator_error) {
        this.element[key].classList.add('error')
        this.element[key].insertAdjacentHTML('afterend', '<div class="validator_error">' + validator_error + '</div')
    }

    clearError() {
        Object.keys(this.inputs).forEach(key => this.element[key].classList.remove('error'))

        const errors = this.element.querySelectorAll('.validator_error')
        errors.forEach(error => error.remove())
    }

    isValid() {
        let isFormValid = true;
        this.clearError()

        Object.keys(this.inputs).forEach(key => {
            let validators = this.inputs[key]
            let validator_error = ''
            let isInputValid = true
            validators.forEach(validator => {
                let validation = validator((this.element[key].value))
                isInputValid = isInputValid && validation.check
                if(!validation.check) {
                    validator_error += '<p>' + validation.error + '</p>'
                }
            })

            if(!isInputValid) this.setError(key, validator_error)

            isFormValid = isFormValid && isInputValid
        })

        return isFormValid;
    }

    clearInputs() {
        Object.keys(this.inputs).forEach(key => this.element[key].value = '')
    }
}