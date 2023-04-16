
$("#title-head").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#first-cont").offset().top,
    },
    "fast"
  );
});
$("#about-btn").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#about-page").offset().top,
    },
    "fast"
  );
});

$("#projects-btn").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#projects-page").offset().top - 48},
    "fast"
  );
});
$("#about-btn").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#about-page").offset().top - 48},
    "fast");
});
$("#contact-btn").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#contact-page").offset().top - 48},
    "fast"
  );
});

$("#btn-1").on('click', function () {
  $("#img-box-1").show(1000);
});
$("#img-box-1").on("click", function () {
  $("#img-box-1").hide(1000);
});
$("#btn-2").on("click", function () {
  $("#img-box-2").show(1000);
});
$("#img-box-2").on("click", function () {
  $("#img-box-2").hide(1000);
});
$("#btn-3").on("click", function () {
  $("#img-box-3").show(1000);
});
$("#img-box-3").on("click", function () {
  $("#img-box-3").hide(1000);
});
$("#btn-4").on("click", function () {
  $("#img-box-4").show(1000);
});
$("#img-box-4").on("click", function () {
  $("#img-box-4").hide(1000);
});
