$(document).ready(function () {
  anime({
    targets: ".container",
    easing: "easeOutExpo",
    translateY: [-50, 0],
    duration: 3000,
    loop: false,
  });
  $("#shareBtn").click(function (e) {
    $(".tooltip-content").toggleClass("active");
    e.preventDefault();
  });
});
