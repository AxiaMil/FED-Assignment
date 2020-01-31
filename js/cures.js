// JavaScript source code
function getHelpPls() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('phoneNo').value;
    while (true) {
        if (name != null && email != null) {
            break
        }
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var contact = document.getElementById('phoneNo').value;
        alert('Please enter your name and email address!')
    }
    alert("Hi " + name + ", an email will be sent to " + email + " within 3-5 working days. ");
    window.location.replace("/cures.html");
}