$(document).ready(function() {
  $('a').click(function(){
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 500);
    return false;
});

var disappear = $("#part1");
var appear = $("#arrow1");
$("#cover1").hover(function(){
  console.log("happy");
  disappear.hide();
  $("#arrow1").addClass("arrowsAppear");
  $("#arrow1").removeClass("arrows");

}, function() {
  disappear.show();
  $("#arrow1").removeClass("arrowsAppear");
  $("#arrow1").addClass("arrows");
});

var disappear2 = $("#part2");
var appear2 = $("#arrow2");
$("#cover2").hover(function(){
  console.log("happy");
  disappear2.hide();
  $("#arrow2").addClass("arrowsAppear");
  $("#arrow2").removeClass("arrows");

}, function() {
  disappear2.show();
  $("#arrow2").removeClass("arrowsAppear");
  $("#arrow2").addClass("arrows");
});

var disappear3 = $("#part3");
var appear3 = $("#arrow3");
$("#cover3").hover(function(){
  console.log("happy");
  disappear3.hide();
  $("#arrow3").addClass("arrowsAppear");
  $("#arrow3").removeClass("arrows");

}, function() {
  disappear3.show();
  $("#arrow3").removeClass("arrowsAppear");
  $("#arrow3").addClass("arrows");

});

// $( "#cover1" ).click(function() {
//
//
// $(".airplane").fadeOut();
// TweenMax.to(".airplane", 2, {x: -700, y: 550, rotation: -30, scale: 1, delay: 1});
//
//     });

  $( "#arrow1" ).click(function() {
    console.log("lalala");
      $(".airplane").show(2);
      TweenMax.to(".airplane", 2, {x: 800, y: 100, rotation: 35, scale: 2.2});
    });

    $( ".airplane" ).click(function() {
      console.log("shoed");
          $(".lightbox").addClass("showup");
      });

    


    //
    // $("#part1").mouseenter(function(){
    //       console.log("hi");
    //       var image_name=$(this).data('image');
    //       var imageTag='<div style="position:absolute;">'+'<img src="'+ "assets/images/arrow.png" +'" alt="image" height="10%" />'+'</div>';
    //       $(this).parent('div').append(imageTag);
    //       $("#part1").addClass("disappear")
    //       $("#cover1").addClass("makeWhite")
    //   });
    //   $("#part1").mouseleave(function(){
    //       $("#cover1").removeClass("makeWhite")
    //         $("#part1").removeClass("disappear")
    //       $(this).parent('div').children('div').remove();
    //   });
    //   $(".parts").mouseenter(function(){
    //         console.log("hi");
    //         var image_name=$(this).data('image');
    //         var imageTag='<div style="position:absolute;">'+'<img src="'+ "assets/images/arrow.png" +'" alt="image" height="10%" />'+'</div>';
    //         $(this).parent('div').append(imageTag);
    //         $(".parts").addClass("disappear")
    //         $(".cover").addClass("makeWhite")
    //     });
    //     $(".parts").mouseleave(function(){
    //         $(".cover").removeClass("makeWhite")
    //           $(".parts").removeClass("disappear")
    //         $(this).parent('div').children('div').remove();
    //     });
    //     $(".parts").mouseenter(function(){
    //           console.log("hi");
    //           var image_name=$(this).data('image');
    //           var imageTag='<div style="position:absolute;">'+'<img src="'+ "assets/images/arrow.png" +'" alt="image" height="10%" />'+'</div>';
    //           $(this).parent('div').append(imageTag);
    //           $(".parts").addClass("disappear")
    //           $(".cover").addClass("makeWhite")
    //       });
    //       $(".parts").mouseleave(function(){
    //           $(".cover").removeClass("makeWhite")
    //             $(".parts").removeClass("disappear")
    //           $(this).parent('div').children('div').remove();
    //       });




})
