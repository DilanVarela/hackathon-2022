$('#slider-patrocinadores').owlCarousel({
    loop:false,
    autoplay:true,
    autoplayTimeout:1900,
    margin:10,
    responsiveClass:true,
    dots:true,
    responsive:{
        0:{
            items:1,
            // nav:true,
            loop:true,
            center:true
        },
        400:{
            items:1,
            // nav:false,
            loop:true,
            center:true
        },
        540:{
            items:2,
            // nav:false,
            loop:true,
            center:true
        },
        720:{
            items:2,
            // nav:false,
            loop:true,
            center:true
        },
        960:{
            items:3,
            // nav:true,
            loop:true
        },
        1140:{
            items:3,
            // nav:true,
            loop:true
        }
    }
});