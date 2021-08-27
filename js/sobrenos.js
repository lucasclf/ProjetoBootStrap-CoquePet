$(document).ready(function() {

// Circulos de dados

    var container1 = document.getElementById("primeiro-circulo");

    var circle1 = new ProgressBar.Circle(container1, {

        color: "#A34DA5",
        strokeWidth: 8,
        duration: 1400,
        easing: 'bounce',
        from: { color: "#AAA" },
        to: { color: "#A34DA5" },

        step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        var value = Math.round(circle.value() * 742);
        circle.setText(value);

        }

    });

    var container2 = document.getElementById("segundo-circulo");

    var circle2 = new ProgressBar.Circle(container2, {

        color: "#A34DA5",
        strokeWidth: 8,
        duration: 1000,
        easing: 'bounce',
        from: { color: "#AAA" },
        to: { color: "#A34DA5" },

        step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        var value = Math.round(circle.value() * 42);
        circle.setText(value);

        }

    });

    var container3 = document.getElementById("terceiro-circulo");

    var circle3 = new ProgressBar.Circle(container3, {

        color: "#A34DA5",
        strokeWidth: 8,
        duration: 1800,
        easing: 'bounce',
        from: { color: "#AAA" },
        to: { color: "#A34DA5" },

        step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        var value = Math.round(circle.value() * 942);
        circle.setText(value);

        }

    });

            circle1.animate(1.0);
            circle2.animate(1.0);
            circle3.animate(1.0);

            stop = 1

//Parallax

    setTimeout(function(){
        $("#data-area").parallax({imageSrc: "img/parallax.webp"})
    }, 250)

})