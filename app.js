// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon //
function myFunction() {
    var x = document.getElementById("responsive-hamburger");
    if (x.className === "nav-bar") {
      x.className += " responsive";
    } else {
      x.className = "nav-bar";
    }
  }