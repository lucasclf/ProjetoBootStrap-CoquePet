$(document).ready(function () {

    var cpf = 0
    var idade = 0

    /* Bloqueio de numeros no input nome */

    $("#nomeInput").keypress(function (e) {

        var tecla = new Number();

        if (window.event) {
            tecla = e.keyCode;
        }
        else if (e.which) {
            tecla = e.which;
        }
        else {
            return true;
        }
        if ((tecla >= "48") && (tecla <= "57")) {
            return false;
        }

    })

    $("#nomeInput").blur(function () {
        $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px red" })
    })

    /* Exigência de @ no input e-mail*/
    $("#email").blur(function () {
        var email = $(this).val()
        var aux = $(this).val().length - 6
        var arroba = email.indexOf("@")
        console.log("posição do arroba",arroba, "tamanho", aux)
        if (arroba == -1 || arroba == 0 || arroba > aux) {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
        } else {
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px red" })
        }
    })

    /* Limite de 2 caracteres no input DDD */

    $(".ddd").keypress(function () {

        var aux = $(this).val()

        if (aux.length > 1) {
            return false;
        } else {
            return true;
        }
    })

    $(".ddd").blur(function () {
        if($(this).val() == "") {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
        } else {
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px red" })
        }
    })

    /* Limite de 9 caracteres no input telefone*/

    $(".telefone").keypress(function () {

        var aux = $(this).val()

        if (aux.length > 8) {
            return false;
        } else {
            return true;
        }

    })

    $(".telefone").blur(function () {
        if($(this).val() == "") {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
        } else {
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px red" })
        }
    })

    /* Validação de CPF */

    $("#cpf").blur(function () {
        var primeiroDigito
        var segundoDigito
        var verifica
        cpf = []
        cpf = $(this).val()
        cpf = cpf.replace(/\.|-/g, "")
        primeiroDigito = 0
        segundoDigito = 0

        for (i = 0; i <= 8; i++) {
            primeiroDigito += cpf[i] * (10 - i)
        }

        primeiroDigito = (primeiroDigito * 10) % 11
        if (primeiroDigito == 10 || primeiroDigito == 11)
            primeiroDigito = 0

        for (i = 0; i <= 9; i++) {
            segundoDigito += cpf[i] * (11 - i)
        }
        segundoDigito = (segundoDigito * 10) % 11
        if (segundoDigito == 10 || segundoDigito == 11) {
            segundoDigito = 0
        }
        if (cpf[0] == 1 && cpf[1] == 1 && cpf[2] == 1 && cpf[3] == 1 && cpf[4] == 1 && cpf[5] == 1 && cpf[6] == 1 && cpf[7] == 1 && cpf[8] == 1 && cpf[9] == 1 && cpf[10] == 1) {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
        }
        else if (cpf[0] == 0 && cpf[1] == 0 && cpf[2] == 0 && cpf[3] == 0 && cpf[4] == 0 && cpf[5] == 0 && cpf[6] == 0 && cpf[7] == 0 && cpf[8] == 0 && cpf[9] == 0 && cpf[10] == 0) {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
        }
        else if (primeiroDigito != cpf[9] || segundoDigito != cpf[10] || verifica == true) {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
        } else {
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px red" })
        }

    })

    /* Validação para datas superiores a 18 anos */

    $("#nasc").blur(function () {
        var dataAtual = new Date()
        var nascimento = $(this).val().substring(0, 4)
        var mes = $(this).val().substring(5, 7)
        var dia = $(this).val().substring(8, 10)
        idade = parseInt(dataAtual.getFullYear()) - nascimento

        if (mes > dataAtual.getMonth() + 1) {
            idade--
        } else if (mes == dataAtual.getMonth() + 1 && dia > dataAtual.getDate()) {
            idade--
        }
        if (idade < 19 || idade > 130) {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
            alert("Desculpe, para se cadastrar conosco você tem que ter mais de 18 anos.")
        } else {
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px green" })
        }
    })
    /* Fazer surgir o questionamento de genêro caso opte por outro */

    $("#genero").change(function () {
        var genero = $(this).val()

        $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px green" })

        if (genero == "o") {
            $(".qual").show()
        } else {
            $(".qual").hide()
        }
    })
    
    /* Validação de confirmação de senha igual a senha */

    $("#senha").on("input", function () {
        var senha = $(this).val()
        var confirmarSenha = $("#confirmar-senha").val()
        console.log("senha", senha, "senha2", confirmarSenha)
        if (senha == "" && confirmarSenha == "") {
            $("#confirmar-senha").css({ border: "1px solid #ced4da", boxshadow: "0px" })
        } else if (confirmarSenha == "") {

        } else if (senha != confirmarSenha) {
            $("#confirmar-senha").css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
        } else if (senha == confirmarSenha) {
            $("#confirmar-senha").css({ border: "green solid 3px", boxshadow: "0px 0px 4px green" })
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px red" })
        }
    })

    $("#senha").blur(function () {
        var senha = $(this).val()
        var confirmarSenha = $("#confirmar-senha").val()

        if (senha != confirmarSenha) {
            $("#confirmar-senha").css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
        } else if($(this).val() == "") {
            $("#confirmar-senha").css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
        } else {
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px red" })
        }
    })

    $("#confirmar-senha").on("input", function () {
        var confirmarSenha = $(this).val()
        var senha = $("#senha").val()
        console.log("senha", confirmarSenha, "senha2", senha)
        
        if ($(this).val() == "") {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
            $("#senha").css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
        } else if (confirmarSenha != senha) {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
            $("#senha").css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
        } else {
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px green" })
            $("#senha").css({ border: "green solid 3px", boxshadow: "0px 0px 4px green" })
        }
    })

    /* Botão enviar */

})
