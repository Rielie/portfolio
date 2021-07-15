function FormAlert(){
    alert("Thank you for your message!");
}

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('nav').addClass("sticky");
        }else{
            $('nav').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('#nav-icon3').click(function(){
        $('nav .menu').toggleClass("active");
        $(this).toggleClass('open');
    });
    
});  


