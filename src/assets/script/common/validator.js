export default class Validator {
    static isRequired(value = '') {
        return {
            check: value.trim(), 
            error: 'Поле должно быть заполнено'
        }
    }

    static isMinLength(length) {
        return value => ({
            check: value.length >= length, 
            error: 'Длина текста должна быть больше ' + length + ' символов'
        })
    }

    static containsEscapeSign(value) {
        return {
            check: !(/[\/\*]/).test(value), 
            error: 'Название не должно содержать символы "*" и "/"'
        }
    }
}