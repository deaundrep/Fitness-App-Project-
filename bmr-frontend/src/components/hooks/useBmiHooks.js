import { useState } from "react";

import React from 'react'


function useBmiHooks() {
    const [bmi, setBmi] = useState();
    const [info, setInfo] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();

    
    function handleEmailOnChange(e) {
        let emailInputValue = e.target.value;
        setEmail(emailInputValue);

        if (isEmail(emailInputValue)) {
            setIsEmailError(false);
            setErrorMessage("");
        } else {
            setIsEmailError(true);
            setErrorMessage("Please enter a valid email");
        }
    }

    function handleEmailOnBlur() {
        setIsEmailOnBlur(true);

        if (email.length === 0) {
            setIsEmailError(true);
            setErrorMessage("Email cannot be empty");
        } else {
            setIsEmailError(false);
            setErrorMessage("");
        }
    }

    return [
        email,
        handleEmailOnChange,
        isEmailError,
        errorMessage,
        isEmailOnBlur,
        handleEmailOnBlur,
    ];
}



export default useBmiHooks

