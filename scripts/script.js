$(document).ready(function () {
  anime({
    targets: ".container",
    easing: "linear",
    translateY: [50, 0],
    duration: 400,
    loop: false,
  });
  $("#shareBtn").click(function (e) {
    $(".tooltip-content").toggleClass("active");
    e.preventDefault();
  });
});
