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
}