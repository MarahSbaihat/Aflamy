// loader-spinner
$(document).ready(function(){
    $('.loader').fadeOut(5000);
    $('.spinner').fadeOut(5000);
    $('body').css('overflow','unset');
});

// navbar-color
$(window).scroll(function(){
    let t = $(window).scrollTop();

    if(t>=10){
        $('.navbar').css('background-color','var(--dark)');
        $('.navbar').removeClass('bg-transparent');
        $('.navbar').css('transition','0.5s');
    }
    else{
        $('.navbar').addClass('bg-transparent');
        $('.navbar').removeClass('bg-white');
    }
});
$(window).scroll(function(){
    let t = $(window).scrollTop();

    if(t>=10){
        $('.navbar2').css('margin-top','0');
    }
    else{
        $('.navbar2').css('margin-top','55px');
    }
});

//top-button
$('.btnTop').click(function(){
    $(window).scrollTop(0);
});
$(window).scroll(function(){
    let t = $(window).scrollTop();

    if(t>=300){
        $('.btnTop').css('display','block');
    }
    else{
        $('.btnTop').css('display','none');
    }
});

// color-box
let colors = ['red','yellow','blue','pink','teal'];
for(let i=0; i<colors.length; i++){
    $('.color-option li').eq(i).css('background',colors[i]);
}
$('.color-option li').click(function(){
    let currentBG = $(this).css("backgroundColor");
    $('.change-color').css('color',currentBG);
});
$('.color-box i').click(function(){
    let optionsWidth = $('.color-option').outerWidth();
    if($('.color-box').css('left')=='0px'){
        $('.color-box').animate({'left':-optionsWidth},3000);
    }
    else{
        $('.color-box').animate({'left':0},3000);
    }
});

// owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
});