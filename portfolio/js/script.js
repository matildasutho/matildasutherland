$(document).ready(function () {
  $(".radial-one").click(function () {
    $("#aboot").toggleClass("hidden");
  });
});

$("#about-btn").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#about-page").offset().top,
    },
    "fast"
  );
});
$("#title-head").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#first-cont").offset().top,
    },
    "fast"
  );
});
$("#projects-btn").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#projects-page").offset().top,
    },
    "fast"
  );
});
$("#skills-btn").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#skills-page").offset().top,
    },
    "fast"
  );
});
$("#contact-btn").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#contact-page").offset().top,
    },
    "fast"
  );
});
// image follow mouse function
$(document).mousemove(function (e) {
  $("#follow").css({
    left: e.pageX,
    top: e.pageY,
  });
});
