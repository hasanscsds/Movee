$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay:true,
        autoplayTimeout: 5000,//1000=1secund
        autoplayHoverPause: true,
        touchDrag: true,
        mouseDrag: true,
        loop: true,//checksiz otish
        smartSpeed: 1700,
        fluidSpeed: true,
        navSpeed: true,
        dots: true,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            1000:{
                items: 1
            },
        }
        
    });
    var owl = $('.owl-carousel');
        owl.owlCarousel();
        $('.owl-next').click(function() {
            owl.trigger('next.owl.carousel');
        })
        $('.owl-prev').click(function() {
            owl.trigger('prev.owl.carousel', [300]);
    })

    $(document).on('click','a[href^="#"]',function(event){
        event.preventDefault();

        $("html,body").animate({
            scrollTop:$($.attr(this,'href')).offset().top
        },1500); //1.5secund da tushishi jquerysiz ham ishlatsa boladi
    });

    $("#language").click(function (){
        if($(this).text() == 'eng'){
            $(this).text('рус');
        } else {
            $(this).text('eng');
        }
    });
    
});