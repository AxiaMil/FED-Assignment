$('#Comments')
            .focus(function () { $(this).css("background", "white") })
            .blur(function () { if ($(this)[0].value == '') { $(this).css("background", "url(./media/BeNice.png) center center no-repeat") } })
            .blur(function () { if ($(this)[0].value == '') { $(this).css("background-color", "white") } });
        $('.on-click')
            .focus(function () { $('.hidden').css("display", "") })
            .blur(function () { $('.hidden').css("display", "none") });
        
        function opensidebar() {
            document.getElementsByClassName("hidden").style.display = ""; 
        }

        function closesidebar() {
            document.getElementsByClassName("hidden").style.hideen = "none";
        }

        function openForm() {
          document.getElementById("myForm").style.display = "block";
        }

        function closeForm() {
          document.getElementById("myForm").style.display = "none";
        }


function formsubmit() {
    var comments = document.getElementById("Comments").value;
    var name = document.getElementsByClassName("form-input-custom")[0].value;
    var email = document.getElementsByClassName("form-input-custom")[1].value;
    if (comments == "" || name == "" || email == "") {
        document.getElementById("alertsubmit").innerHTML = "Please fill in all inputs";
    }
    else {
        document.getElementById("alertsubmit").innerHTML = name + " have commented " + comments;
        document.getElementById("Comments").value = "";
        document.getElementsByClassName("form-input-custom")[0].value = "";
        document.getElementsByClassName("form-input-custom")[1].value = "";
    }
    $("#alertsubmit").fadeIn("slow");

    setTimeout(() => { $("#alertsubmit").fadeOut("slow") }, 3000);

}

function submittext() {
    var name = document.getElementById("form34").value;
    var email = document.getElementById("form29").value;
    var topic = document.getElementById("form32").value;
    var text = document.getElementById("form8").value;
    if (name == "" || email == "" || text == "") {
        document.getElementById("textsubmit").innerHTML = "Please fill in all required particulous"
        $("#textsubmit").fadeIn("slow");

        setTimeout(() => { $("#textsubmit").fadeOut("slow") }, 3000);
    }
    else {
        document.getElementById("form34").value = "";
        document.getElementById("form29").value = "";
        document.getElementById("form32").value = "";
        document.getElementById("form8").value = "";
        document.getElementById("textsubmit").innerHTML = name + " your email on " + topic + " is on the way from " + email; 
        $("#textsubmit").fadeIn("slow");
        setTimeout(() => { $("#textsubmit").fadeOut("slow") }, 3000);
        setTimeout(() => { $("#modalContactForm").modal("hide") }, 4000);

    }
}