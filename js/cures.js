// JavaScript source code
function getHelpPls() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var check = true;
    if (name == '' || name == null) {
        alert('Please fill in your name');
        check = false;
    }
    if (email == '' || email == null) {
        alert('Please fill in your email');
        check = false;
    }
    if (check == true) {
        alert("Hi " + name + ", an email will be sent to " + email + " within 3-5 working days. Your comments will be noted down by our staff. ");
        window.location.replace("/cures.html");
    }
}