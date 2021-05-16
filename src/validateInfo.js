export default function validateInfo(values) {
    let errors = {}

    if (!values.username.trim()) {
        errors.username = "Username is required."
    }

    if (!values.email) {
        errors.email = 'Email is required.'
    } else if (!/^[A-Z0-9._+%-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invalid."
    }

    if (!values.password) {
        errors.password = 'Password is required.'
    } else if (values.password.length < 6) {
        errors.password = "Password  needs to be more than 6 characters."
    }

    if (!values.password2) {
        errors.password2 = 'Password is required.'
    } else if (values.password !== values.password2) {
        errors.password2 = "Passwords do not match."
    }

    return errors
}