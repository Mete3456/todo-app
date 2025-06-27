function lValidation(values){
    let error = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 characters, one letter and one 

    if (values.email === "") {
       error.mail =  "Email is required";
    } 
    else if (!emailRegex.test(values.email)) {
        error.mail = "Email did not match ";
    }
    else {
        error.mail = "";
    }

    if (values.password === "") {
        error.password = "Password should not be empty";
    } else if (!passwordRegex.test(values.password)) {
        error.password = "Password did not match";
    } else {
        error.password = "";
    }
    return error;
}


export default lValidation;