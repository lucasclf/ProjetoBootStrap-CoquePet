$(document).ready(function() {

    $(".agosto").click( function(){
        $("#agosto").slideDown()
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#agosto").offset().top-100},
            1500)
    })

    $(".voltar").click( function(){
        $("#setembro").fadeOut()
        $("#agosto").fadeIn()
    })

    $(".fechar-agosto").click( function(){
        $("#agosto").hide()
    })

    $(".fechar-setembro").click( function(){
        $("#setembro").hide()
    })

    $(".setembro").click( function(){
        $("#agosto").fadeOut()
        $("#setembro").fadeIn()
    })
});