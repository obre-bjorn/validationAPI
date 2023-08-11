const TESTS = {
    // reportValidy() Triggers Invalid Event
    // eslint-disable-next-line quotes
    successIcon: `<i class="fa-solid fa-circle-check" style="color: #23d520;"></i>`,
    // eslint-disable-next-line quotes
    wrongIcon: `<i class="fa-solid fa-circle-xmark" style="color: #f20707;"></i>`,

    clearElement(ev) {
        element.remove
    },

    testName(ev) {
        const fullname = ev.target


    },

    testEmail(ev) {
        const email = ev.target
        const checkIcon = email.nextElementSibling
        const emailReg = /@gmail.com$/i
        email.setCustomValidity('')

        if (emailReg.test(email.value) === false) {
            email.setCustomValidity('Please enter a gmail email')
            console.log('This is not a gmail address!')
            email.reportValidity()
            return
        }
        checkIcon.innerHTML = ''
        checkIcon.insertAdjacentHTML('beforeend', TESTS.successIcon)

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
        const checkIcon = element.nextElementSibling
        checkIcon.innerHTML = ''
        checkIcon.insertAdjacentHTML('beforeend', TESTS.wrongIcon)

    }
}

export default TESTS;