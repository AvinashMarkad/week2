$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({
            left: '550px',
            opacity:'0.5s',
            height:'+=50px',
            width:'+=50px'
        });
    });
});

