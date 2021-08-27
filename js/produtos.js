$(document).ready(function () {
    var showGato = true, showCachorro = true, showJardim = true, showPetisco = true, showComida = true, showRemedio = true, showDragao = true
    
    $("#gato").click(
        function() {
            if(showGato == true) {
            $(".produto").hide()
            $(".produto-gato").show()
            showGato = false
            } else {
                $(".produto").show()
                showGato = true
            }
        }
    )

    $("#cachorro").click(
        function() {
            if(showCachorro == true) {
            $(".produto").hide()
            $(".produto-cachorro").show()
            showCachorro = false
            } else {
                $(".produto").show()
                showCachorro = true
            }
        }
    )

    $("#jardim").click(
        function() {
            if(showJardim == true) {
            $(".produto").hide()
            $(".produto-jardim").show()
            showJardim = false
            } else {
                $(".produto").show()
                showJardim = true
            }
        }
    )

    $("#petisco").click(
        function() {
            if(showPetisco == true) {
            $(".produto").hide()
            $(".produto-petisco").show()
            showPetisco = false
            } else {
                $(".produto").show()
                showPetisco = true
            }
        }
    )

    $("#comida").click(
        function() {
            if(showComida == true) {
            $(".produto").hide()
            $(".produto-comida").show()
            showComida = false
            } else {
                $(".produto").show()
                showComida = true
            }
        }
    )

    $("#remedio").click(
        function() {
            if(showRemedio == true) {
            $(".produto").hide()
            $(".produto-remedio").show()
            showRemedio = false
            } else {
                $(".produto").show()
                showRemedio = true
            }
        }
    )

    $("#dragao").click(
        function() {
            if(showDragao == true) {
            $(".produto").hide()
            $(".produto-dragao").show()
            showDragao = false
            } else {
                $(".produto").show()
                showDragao = true
            }
        }
    )
});