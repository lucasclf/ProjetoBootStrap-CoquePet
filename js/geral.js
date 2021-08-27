$(document).ready(function () {
// VOLTAR AO TOPO

    if ($(window).scrollTop() > 399){
        $("#voltar").show();
    } else {
        $("#voltar").hide();
    }
    
    window.addEventListener("scroll", function () {
            console.log($(window).scrollTop())
        if ($(window).scrollTop() > 399){
            $("#voltar").show();
        } else {
            $("#voltar").hide();
        }
    });
});