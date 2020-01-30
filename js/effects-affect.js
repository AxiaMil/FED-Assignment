function openDetails(ID) {
    console.log(ID);
    document.getElementById(ID).open = true;
}
function updatelungs() {
    var NoOfCigarette = document.getElementById("calculator-cigs-per-day").value;
    document.getElementById("lung_gradient").setAttribute("y2", NoOfCigarette / 50);

}
