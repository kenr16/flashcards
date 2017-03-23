$(document).ready(function() {

  $("body").hover(function() {
  });

  $("div.col-md-3").hover(function() {
    $(this).find("div").fadeToggle();

  });


  // $(".clickable1").hover(function() {
  //   $(".card-showing1").fadeToggle(500);
  //   $(".card-hidden1").fadeToggle(500);
  // });
  
});
