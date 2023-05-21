$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg" alt="right"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg" alt="right"></img></button>',
        responsive: [
            {
                breakpoint: 968,
                settings: {
                    dots: true,
                    arrows: false
                }
                
            }
        ]
  });
});