$(window).on("load",setTimeout(function(){
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    var nav = document.getElementsByClassName("nav-custom-p");
    var arr = toArray(nav);
    arr.forEach( (item) => {
        if(item.getAttribute("href") == filename)
        {
            item.classList.add("active");
        }
        else
        {
            item.classList.remove("active");
        }
    });

    $(".loader").fadeOut("slow");
}, 1000));

function showalert()
{
    
    $("#alertsubmit").fadeIn("slow");
 
    setTimeout(() => {$("#alertsubmit").fadeOut("slow")}, 3000);
}

function toArray(x) {
    for(var i = 0, a = []; i < x.length; i++)
        a.push(x[i]);

    return a
}

//Get the button:
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  // document.body.scrollTop = 0; // For Safari
  // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  $('html').animate({
    scrollTop: 0}, 500)
}



$(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});

$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});
