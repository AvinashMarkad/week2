$(document).ready(function () {
    $("#btn1").click(function () {
        $("#div1").fadeIn(1000);
        $("#div2").fadeIn(2000);
        $("#div3").fadeIn(3000);
    })
    $("#btn2").click(function(){
        $("#div1").fadeOut(1000);
        $("#div2").fadeOut(2000);
        $("#div3").fadeOut(3000);
    })
    $("#btn3").click(function(){
        $("#div1").fadeToggle(1000);
        $("#div2").fadeToggle(2000);
        $("#div3").fadeToggle(3000);
    })
})