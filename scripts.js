function toggleContactForm() {
  var x = document.getElementById("contact_form_open");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}

function showNav() {
  var x = document.getElementById("nav_main");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}