import TESTS from './validationTests'

const APP = {
    init() {
        // Selectors
        const fullname = document.querySelector('#fullname')
        const email = document.querySelector('#email')
            // const country = document.querySelector('#country')
            // const phoneNumber = document.querySelector('#phone-number')
        const password = document.querySelector('#password')
            // const confirmPassword = document.querySelector('#confirm-password')
            // const form = document.querySelector('form1')

        fullname.addEventListener('change', TESTS.testName)
        email.addEventListener('change', TESTS.testEmail)
        password.addEventListener('change', TESTS.testPassword)

    },

    validate(element) {
        console.log(element.target.checkValidity())
    }
}



APP.init()