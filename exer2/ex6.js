
const checkPasswords = (passwords) => {
    let message = "";
    if (passwords.length === 0){
        message = "Passwords required";
    }
    else if(passwords.length < 8){
        message = "Passwords is weak";
    }else if(passwords.length >=30){
        message = "Passwords is too long";
    }else{
        message = "Passwords is stronger";
    }
    return message;
}
console.log(checkPasswords("jdhfhfj"));