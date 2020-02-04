function openDetails(ID) {
    console.log(ID);
    document.getElementById(ID).open = true;
}

function updatelungs() {
    document.getElementById('calculatorSlider').addEventListener("input", function () {
        var NoOfCigarette = document.getElementById("calculatorSlider").value;
        var decimal = 1 - (NoOfCigarette * 0.01);
        var tarperyear = document.getElementById("tar-per-year").innerHTML = (NoOfCigarette * 7) + " grams"
        document.getElementById("lung_gradient").setAttribute("y2", decimal);
        document.getElementById("NoOfCigarettestyle").value = NoOfCigarette;
    });
}




function updatelungs1() {
    var NoOfCigarette = document.getElementById("NoOfCigarettestyle").value;
    var decimal = 1 - (NoOfCigarette * 0.01);
    var tarperyear = document.getElementById("tar-per-year").innerHTML = (NoOfCigarette * 7) + " grams"
    document.getElementById("lung_gradient").setAttribute("y2", decimal);
    document.getElementById("calculatorSlider").value = NoOfCigarette;
    
}

function slider3() {

    document.getElementById('packcost1').addEventListener("input", function () {
        var slider = document.getElementById("packcost1").value;
        document.getElementById("packcost").value = slider;
        calculateSavings();


    });


}