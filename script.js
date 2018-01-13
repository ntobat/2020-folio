//loader
var cookieName = 'yourcookiename';
$(function() {
    checkCookie();
});

function checkCookie() {
  if (document.cookie.length > 0 && document.cookie.indexOf(cookieName + '=') != -1) {
    // do nothing, cookie already sent
  } else {
    // handle jQuery animation
    $(".loader").css("display", "block");
    $(function(){
      setTimeout(function(){
        $('.loader').fadeOut('slow', function() {
          $(this).remove();
        });
      }, 3200);
    });
    // set the cookie to show user has already visited
    document.cookie = cookieName + "=1";
  }
}
/*
$(function(){
  setTimeout(function(){
    $('.loader').fadeOut('slow', function() {
      $(this).remove();
    });
   }, 3200);
});
*/
//scroll animation
$(function(){
  //disable spacebar scroll
  window.addEventListener('keydown', function(e) {
    if(e.keyCode == 32 && e.target == document.body) {
      e.preventDefault();
    }
  });
  //scroll
  var lastScrollTop = 0;
  $(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
      $(".spin").removeClass("animate-up").addClass("animate-down");
    } else {
      $(".spin").removeClass("animate-down").addClass("animate-up");
    }
    lastScrollTop = st;
  });
  //click
  $("#p1abt").on("click", function(){
    $(".spin").removeClass("animate-up").addClass("animate-down");
    $.scrollify.move("#page2");
  });
  $("#p1-ftr-circle").on("click", function(){
    $(".spin").removeClass("animate-up").addClass("animate-down");
    $.scrollify.move("#page2");
  });
  $(".arrow").on("click", function(){
    $(".spin").removeClass("animate-down").addClass("animate-up");
    $.scrollify.move("#page1");
  });
});
