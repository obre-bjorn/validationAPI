/* eslint-disable no-useless-return */
const TESTS = {
    // reportValidy() Triggers Invalid Event
    // eslint-disable-next-line quotes
    successIcon: `<i class="fa-solid fa-circle-check" style="color: #23d520;"></i>`,
    // eslint-disable-next-line quotes
    wrongIcon: `<i class="fa-solid fa-circle-xmark" style="color: #f20707;"></i>`,



    testName(ev) {
        const fullname = ev.target

        if (fullname.value.length < 3) {
            fullname.setCustomValidity('Name is too Short!')
            fullname.reportValidity()
            return
        }
        TESTS.success(ev)

    },

    testEmail(ev) {
        const email = ev.target
        const emailReg = /@gmail.com$/i
        email.setCustomValidity('')

        if (emailReg.test(email.value) === false) {
            email.setCustomValidity('Please enter a gmail email')
            console.log('This is not a gmail address!')
            email.reportValidity()
            return
        }
        TESTS.success(ev)

    },
    testPassword(ev) {
        const password = ev.target
        const passwordReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~-]).{8,}$/
        password.setCustomValidity('')


        if (passwordReg.test(password.value) === false) {
            password.setCustomValidity('Password must contain capital\n Both capital and small characters and special characters')
            password.reportValidity()
            return
        }
        TESTS.success(ev)
    },
    testConfirmPassword(ev) {
        const password = document.querySelector('#password')
        const confirmPassword = ev.target

        confirmPassword.setCustomValidity('')
        if (confirmPassword.value !== password.value) {
            confirmPassword.setCustomValidity('Should be the same as password')
            password.reportValidity()
            return
        }
        TESTS.success(ev)

    },
    fail(ev) {
        const element = ev.target
        const checkIcon = element.nextElementSibling
        checkIcon.innerHTML = ''
        checkIcon.insertAdjacentHTML('beforeend', TESTS.wrongIcon)

    },
    success(ev) {
        const element = ev.target
        const checkIcon = element.nextElementSibling
        checkIcon.innerHTML = ''
        checkIcon.insertAdjacentHTML('beforeend', TESTS.successIcon)

    }
}

export default TESTS;