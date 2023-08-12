
document.addEventListener("DOMContentLoaded",function(){


$(".durH").click(function () {
  $(".durD").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});





let newDate = new Date("feb 5, 2025 18:25:10").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();

  var count = newDate - now;

  var days = Math.floor(count / (1000 * 60 * 60 * 24));
  var hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((count % (1000 * 60)) / 1000);


$(".day").html(`${days} D`)
$(".hour").html(`${hours} H`)
$(".mint").html(`${minutes} M`)
$(".second").html(`${seconds} S`)


if (count < 0) {
    clearInterval(x);
    document.getElementById("Timer").innerHTML = "Date EXPIRED";
  }

});




function countChar(val) {
    var len = val.value.length;
    if (len >= 100) {
      $("#chars").text("your available character finished")
    } else {
      $('#chars').text(100 - len);
    }
  };


  $(".navIcon").click(function(){

    $('.homeNav').css("width","250px")
    $('.homeContent').css("margin-left","250px")

  })

  $('.closebtn').click(function(){
    $('.homeNav').css("width","0px")
    $('.homeContent').css("margin-left","0px")
  })


  
$(".homeNav a").click(function(){
    
  var href= $(this).attr("href");
  
  var sectionTop = $(href).offset().top;
  
  $("html , body").animate({scrollTop:sectionTop},{ duration: 3000, queue: false });
  
})



  $(".load").fadeOut(3000, function () {
    $(".load").removeClass("d-flex")
})
})