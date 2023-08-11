const TESTS = {
    // reportValidy() Triggers Invalid Event

    testName(ev) {
        const fullname = ev.target

        console.log(fullname)
    },
    testEmail(ev) {
        const email = ev.target
        const emailReg = /@gmail.com$/i
        email.setCustomValidity('')

        if (emailReg.test(email.value) === false) {
            email.setCustomValidity('Please enter a gmail email')
            console.log('This is not a gmail address!')
            email.reportValidity()
        }

    },
    testPassword(ev) {
        const password = ev.target
        const passwordReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~-]).{8,}$/
        password.setCustomValidity('')


        if (passwordReg.test(password.value) === false) {
            password.setCustomValidity('Password must contain capital\n Both capital and small characters and special characters')
            password.reportValidity()
        }
    },
    testConfirmPassword(ev) {
        const password = document.querySelector('#password')
        const confirmPassword = ev.target

        confirmPassword.setCustomValidity('')
        if (confirmPassword.value !== password.value) {
            confirmPassword.setCustomValidity('Should be the same as password')
            password.reportValidity()
        }

    },
    fail(ev) {
        const element = ev.target
        console.log(element.nextElementSibling)

    }
}

export default TESTS;