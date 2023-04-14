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
