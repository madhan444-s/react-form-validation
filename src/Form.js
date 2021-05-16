import React, { useState } from 'react'
import FormSignup from './FormSignup'
import FormSucces from './FormSuccess'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <div className="form-container">
            <span className="close-btn">x</span>
            <div className="form-content-left">
                <img src="img/img-2.svg" className='form-img' alt="spaceship"></img>
            </div>
            {!isSubmitted ? (<FormSignup submitForm={submitForm} />) : (<FormSucces />)}
        </div>

    )
}
export default Form