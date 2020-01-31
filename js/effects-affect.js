function openDetails(ID) {
    console.log(ID);
    document.getElementById(ID).open = true;
}
function updatelungs() {
    var NoOfCigarette = document.getElementById("calculatorSlider").value;
    var decimal = 1 - (NoOfCigarette * 0.01);
    var tarperyear = document.getElementById("tar-per-year").innerHTML = (NoOfCigarette * 7) + " grams"
    document.getElementById("lung_gradient").setAttribute("y2", decimal);
    document.getElementById("NoOfCigarettestyle").value = NoOfCigarette;
}


function updatelungs1() {
    var NoOfCigarette = document.getElementById("NoOfCigarettestyle").value;
    var decimal = 1 - (NoOfCigarette * 0.01);
    var tarperyear = document.getElementById("tar-per-year").innerHTML = (NoOfCigarette * 7) + " grams"
    document.getElementById("lung_gradient").setAttribute("y2", decimal);
    document.getElementById("calculatorSlider").value = NoOfCigarette;
}