$(function(){
    $(".mosaico .containner .mosaico-wraper").slick({
        centerMode: false,
        slidesToShow:6,
        arrow:false,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    arrow:false,
                    centerMode:true,
                    slidesToShow:3
                }
            },
            {
                breakpoint:580,
                settings:{
                    arrow:false,
                    centerMode:true,
                    slidesToShow:2
                }
            }
        ]
    });
    /*$(".tratamento .containner").slick({
        centerMode:false,
        slidersToShow:3,
        arrow:false,
        infinite:false,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    arrow:false,
                    dots:true,
                    infinite:false,
                    centerMode:true,
                    slidesToShow:2
                }
            }
        ]
    })*/
    $(".depoimentos.containner").slick()
})