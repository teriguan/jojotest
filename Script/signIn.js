function validateSignIn() {
    if(validateEmail()
    && validatePassword() === true) {
        var send = true;
    }
    else {
        send = false;
    }
    if (send == false) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
    return send;
}
function validateEmail() {
    var x = document.getElementById("signinemail").value;
    if (x === null || x === "") {
        document.getElementById("emailmsg").style.display = "";
        return false;
    }
    else if (x.indexOf('@') === -1) {
    document.getElementById("emailmsg").style.display = "";
        return false;
    }
    else {
        document.getElementById("emailmsg").style.display = "none";
        return true;
    }
}
function focusEmail() {
    var x = document.getElementById("signinemail").value;
        if (x === null || x === "") {
            document.getElementById("emailmsg").style.display = "none";
    }
}
function validatePassword() {
    var x = document.getElementById("password").value;
    if (x === null || x === "") {
        document.getElementById("passmsg").style.display = "";
        return false;
    }
    else {
        document.getElementById("passmsg").style.display = "none";
        return true;
    }
}
function focusPassword() {
    var x = document.getElementById("password").value;
    if (x === null || x === "") {
        document.getElementById("passmsg").style.display = "none";
    }
}
function validateRegister() {
    var valid = true;
        valid = valid && validateFirstName();
        valid = valid && validateLastName();
        valid = valid && validatePhone();
        valid = valid && validateRegEmail();
        valid = valid && validateRegPassword();
        valid = valid && validateConPassword();
        valid = valid && validateDog();
        valid = valid && validateBreed();
    if (valid === false) {
            event.preventDefault();
    }
        return valid;
}
function validateFirstName() {
    var x = document.getElementById("firstname").value;
    if (x === null || x === "") {
        document.getElementById("firstmsg").style.display = "";
        return false;
    }
    else {
        document.getElementById("firstmsg").style.display = "none";
        return true;
    }
}
function focusFirstName() {
    var x = document.getElementById("firstname").value;
    if (x === null || x === "") {
        document.getElementById("firstmsg").style.display = "none";
    }
}
function validateLastName() {
    var x = document.getElementById("lastname").value;
    if (x === null || x === "") {
        document.getElementById("lastmsg").style.display = "";
        return false;
    }
    else {
        document.getElementById("lastmsg").style.display = "none";
        return true;
    }
}
function focusLastName() {
    var x = document.getElementById("lastname").value;
    if (x === null || x === "") {
        document.getElementById("lastmsg").style.display = "none";
    }
}
function validatePhone() {
    var x = document.getElementById("phone").value;
    if (x === null || x === "") {
        document.getElementById("phonemsg").style.display = "";
        return false;
    }
    else if (/\d{10}/.test(x) === false) {
    document.getElementById("phonemsg").style.display = "";
        return false;
    }
    else {
        document.getElementById("phonemsg").style.display = "none";
        return true;
    }
}
function focusPhone() {
    var x = document.getElementById("phone").value;
    if (/\d{10}/.test(x) === false) {
        document.getElementById("phonemsg").style.display = "";
    }
    else {
        document.getElementById("phonemsg").style.display = "none";
    }
}
function validateRegEmail() {
    var x = document.getElementById("registeremail").value;
    if (x === null || x === "") {
        document.getElementById("emailregmsg").style.display = "";
        return false;
    }
    else if (x.indexOf('@') === -1) {
    document.getElementById("emailregmsg").style.display = "";
        return false;
    }
    else {
        document.getElementById("emailregmsg").style.display = "none";
        return true;
    }
}
function focusRegEmail() {
    var x = document.getElementById("registeremail").value;
    if (x === null || x === "") {
        document.getElementById("emailregmsg").style.display = "none";
    }
}
function validateRegPassword() {
    var x = document.getElementById("pass").value;
    if (x === null || x === "") {
        document.getElementById("passregmsg").style.display = "";
        return false;
    }
    else {
        document.getElementById("passregmsg").style.display = "none";
        return true;
    }
}
function focusRegPassword() {
    var x = document.getElementById("pass").value;
    if (x === null || x === "") {
        document.getElementById("passregmsg").style.display = "none";
    }
}
function validateConPassword() {
    var x = document.getElementById("confirmpass").value;
    var y = document.getElementById("pass").value;
    if (x === null || x === "") {
        document.getElementById("passconmsg").style.display = "";
        return false;
    }
    else if (x!== y) {
    document.getElementById("passconmsg").style.display = "";
        return false;
    }
    else {
        document.getElementById("passconmsg").style.display = "none";
        return true;
    }
}
function focusConPassword() {
    var x = document.getElementById("confirmpass").value;
    if (x === null || x === "") {
        document.getElementById("passconmsg").style.display = "none";
    }
}
function validateDog() {
    var x = document.getElementById("dogname").value;
    if (x === null || x === "") {
        document.getElementById("dogmsg").style.display = "";
        return false;
    }
    else {
        document.getElementById("dogmsg").style.display = "none";
        return true;
    }
}
function focusDog() {
    var x = document.getElementById("dogname").value;
    if (x === null || x === "") {
        document.getElementById("dogmsg").style.display = "none";
    }
}
function validateBreed() {
    var x = document.getElementById("dogbreed").value;
    if (x === null || x === "") {
        document.getElementById("breedmsg").style.display = "";
        return false;
    }
    else {
        document.getElementById("breedmsg").style.display = "none";
        return true;
    }
}
function focusBreed() {
    var x = document.getElementById("dogbreed").value;
    if (x === null || x === "") {
        document.getElementById("breedmsg").style.display = "none";
    }
}
