

$(document).ready(function(){
    
    
     function animation(){
        
        let windowHeight = $(window).height();
        let scroll = $(window).scrollTop();
        
        $('.animation').each(function(){
            
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            
            if(position < windowHeight + scroll - 100){
                $(this).addClass(animationName);
            } 
        }) ; 
    }
    
    $(window).scroll(function(){
        animation();
    });
    
    animation();
});

