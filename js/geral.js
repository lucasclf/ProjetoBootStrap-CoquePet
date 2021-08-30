$(document).ready(function () {
// VOLTAR AO TOPO

    var topo = $("#topo")

    if ($(window).scrollTop() > 399){
        $("#voltar").show();
    } else {
        $("#voltar").hide();
    }
    
    window.addEventListener("scroll", function () {
        if ($(window).scrollTop() > 399){
            $("#voltar").show();
        } else {
            $("#voltar").hide();
        }
    });

    $("#voltar").click( function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $(topo).offset().top - 70},
            1500)
    })
});