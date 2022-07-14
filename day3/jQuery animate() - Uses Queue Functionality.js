$(document).ready(function(){
    $("button").click(function(){
       var div= $("div")
       div.animate({height:'800px',opacity:'0.5'},"fast");
       div.animate({width:'800px',opacity:'0.5'},"fast");
       div.animate({height:'300px',opacity:'0.5'},"fast");
       div.animate({width:'300px',opacity:'0.5'},"fast");
    })
})