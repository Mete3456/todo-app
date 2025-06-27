function sValidation(values){
    let error = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 characters, one letter and one 

    if (values.name=== "") {
        error.name="Name should not be empty";
        } 
        else {
            error.name = "";
        }


    if (values.email === "") {
       error.mail =  "Email is required";
    } 
    else if (!emailRegex.test(values.email)) {
        error.mail = "Email is not valid";
    }
    else {
        error.mail = "";
    }

    if (values.password === "") {
        error.password = "Password is required";
    } else if (!passwordRegex.test(values.password)) {
        error.password = "Password must be at least 8 characters long and contain at least one letter and one number";
    } else {
        error.password = "";
    }
    return error;
}



export default sValidation;