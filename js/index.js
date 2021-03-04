$(function () {
  $("#navigation").load("/path/nav.html");

  var pages = [
    "about",
    "work",
    "contact",
    "food-pantry",
    "government",
    "home",
    "packventure",
    "delivereez",
    "swift-list",

  ];
  var urlParams = new URLSearchParams(window.location.search);
  var path = urlParams.get("path");
  if (!path) {
    path = "home";
  } else if (!pages.includes(path)) {
    path = "error";
  }

  $("#hero-section").load("/path/" + path + ".html", function () {
    setTimeout(function () {
      AOS.init();
    }, 100);
    $.getScript("/js/contact.js");
    // if (path == "home") {
    //   $("#footer-fix").addClass("fixed-bottom");
    // } else {
    //   $("#footer-fix").removeClass("fixed-bottom");
    // }
  });

  $("#footer-nav").load("/path/footer.html");
});
