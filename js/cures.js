// JavaScript source code
function getHelpPls() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('phoneNo').value;
    alert("Hi " + name + ", an email will be sent to " + email + " within 3-5 working days. ");
    window.location.replace("/cures.html");
}