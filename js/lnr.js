function thankyou() {
    var name = document.getElementById('name').value;
    var case1 = document.getElementById("casetype");
    var casename = case1.options[case1.selectedIndex].text;
    if (name === "") {
        alert("You did not enter your name!")
        return;
    }
    if (casename == "Case type") {
        alert("You did not choose a case type!")
        return;
    }
    alert("Thank you, " + name + ". We have received your report regarding " + casename + ". We will investigate this case once the case is validated.")
}