import { useState } from "react";

import React from 'react'


function useBmiHooks() {
    const [bmi, setBmi] = useState();
    const [info, setInfo] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();

    
    function handleBmiOnChange(e) {
        let bmiInputValue = e.target.value;
        setBmi(bmiInputValue);

        if (isBmi(bmiInputValue)) {
            setIsBmiError(false);
            setErrorMessage("");
        } else {
            setIsBmiError(true);
            setErrorMessage("Please enter a valid Bmi");
        }
    }

    function handleBmiOnBlur() {
        setIsBmiOnBlur(true);

        if (bmi.length === 0) {
            setIsEmailError(true);
            setErrorMessage("bmi cannot be empty");
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

