$(document).ready(function(){
  $(".radial-one").click(function(){
    $("#aboot").toggleClass("hidden");
  });
  $(".radial-four").click(function(){
    $("#contact-open").toggleClass("hidden");
  });
});
$(document).ready(function(){

});
$("#projects-btn").click(function() {
  $('html,body').animate({
      scrollTop: $("#projects-page").offset().top},
      'fast');
});

$("#title-head").click(function() {
  $('html,body').animate({
      scrollTop: $("#first-cont").offset().top},
      'fast');
});
$("#skills-btn").click(function() {
  $('html,body').animate({
      scrollTop: $("#skills-page").offset().top},
      'fast');
});
// image follow mouse function
$(document).mousemove(function(e) {
  $("#follow").css({
    left: e.pageX,
    top: e.pageY
  });
});

