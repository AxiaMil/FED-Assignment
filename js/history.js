

function calculateSavings() {
    var quantity = document.getElementById("quantity").value;
    var packsize = document.getElementById("packsize").value;
    var packcost = document.getElementById("packcost").value;

    var a = parseInt(quantity) * 365 * 30 / parseInt(packsize);
    a = Math.floor(a);

    var finalsaving = a * parseInt(packcost);
    var notsmoked = parseInt(quantity) * 365 * 30;
    document.getElementById("amtnotsmoked").innerHTML = notsmoked + " sticks";
    document.getElementById("amtsaved").innerHTML = "$" + finalsaving;
    //var coins = parseInt(finalsaving) / 8000;
    //coins = Math.floor(coins);

}

function slider1(){
    
    document.getElementById('quantity1').addEventListener("input", function () {
        var slider = document.getElementById("quantity1").value;
        document.getElementById("quantity").value = slider;
        calculateSavings();


    });
}

function slider2() {

    document.getElementById('packsize1').addEventListener("input", function () {
        var slider = document.getElementById("packsize1").value;
        document.getElementById("packsize").value = slider;
        calculateSavings();


    });
    

}

function slider3() {

    document.getElementById('packcost1').addEventListener("input", function () {
        var slider = document.getElementById("packcost1").value;
        document.getElementById("packcost").value = slider;
        calculateSavings();


    });
    

}

function formsubmit() {
    var name = document.getElementById("name1").value;
    var email = document.getElementById("email1").value;
    if (name == "" || email == "") {
        document.getElementById("confirmedtext").innerHTML = "Please fill in all the fields."
    }
    else {
        document.getElementById("confirmedtext").innerHTML = "Thank you for signing up, " + name + "! An Email with all the details you need has just been sent to " + email + ".";

    }
    

}


