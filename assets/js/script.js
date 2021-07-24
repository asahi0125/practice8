$('.slider').slick ({
    autoplay:true,
    autoplaySpeed:5000,
    speed: 3000,
    fade: true,
    cssEase: 'linear'
});


// ハンバーガーメニュー
$('.hamburger-menu').on('click',function(){
    $('.global-nav').fadeToggle(300);
    $('.hamburger-menu').toggleClass('cross');
    $('body').toggleClass('noscroll');
});

