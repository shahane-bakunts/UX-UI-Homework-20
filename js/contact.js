$(function () {
  var fName = $("#fname");

  fName.blur(function (e) {
    if (fName.val() === "") {
      fName.css("border", "1px solid red");
    } else {
      fName.css("border", "1px solid #271458");
    }
  });

  $("#contactForm").submit(function (e) {
    e.preventDefault();
    var fName = $("#fname");
    var email = $("#email");
    var subject = $("#subject");
    if (fName.val() === "" || email.val() === "" || subject.val() === "") {
      alert("All fields are required");
    } else {
      $("#successMessage").text(
        `Thank You ${fName.val()} for your message. I'll get back to you ASAP!`
      );
      fName.val("");
      email.val("");
      subject.val("");
    }
  });

  $("#testa").click(function (e) {
    e.preventDefault();
    $("#testa").text("Clicked");
    console.log($("#fname"));
  });
});

// <!-- Hotjar Tracking Code for shahane-bakunts.com -->

(function (h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function () {
      (h.hj.q = h.hj.q || []).push(arguments);
    };
  h._hjSettings = { hjid: 2182625, hjsv: 6 };
  a = o.getElementsByTagName("head")[0];
  r = o.createElement("script");
  r.async = 1;
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
  a.appendChild(r);
})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
