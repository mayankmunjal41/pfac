$("body").hide();
$("body").fadeIn(1000);

$(".btn-1").click(function() {
    $('html, body').animate({
        scrollTop: $(".about-us").offset().top
    }, 1000);
});

$('.navbar-toggler').click(function() {
  $(".icon").toggleClass("close");
});


$(document).ready(function(){
    $('a[href^="#adoption"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top //no need of parseInt here
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});
