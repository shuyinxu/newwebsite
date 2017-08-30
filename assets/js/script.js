$(document).ready(function() {
  $('a').click(function(){
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 500);
    return false;
});

var disappear = $("#part1");

$("#cover1").hover(function(){
  console.log("happy");
  disappear.hide();

}, function() {
  disappear.show();

});

var disappear2 = $("#part2");

$("#cover2").hover(function(){
  console.log("happy");
  disappear2.hide();

}, function() {
  disappear2.show();

});

var disappear3 = $("#part3");

$("#cover3").hover(function(){
  console.log("happy");
  disappear3.hide();

}, function() {
  disappear3.show();

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
