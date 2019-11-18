// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

$( document ).ready(function() {

    
    
    $(".grid-item").click( function() {

        var elementoCliccato = $(this);

        $.ajax({
            url : "https://flynn.boolean.careers/exercises/api/random/int",
            method : "get",
            success : function (datiritorno) {
                if(datiritorno.response <= 5) {
                    elementoCliccato.css("background-color", "yellow")
                } else {
                    elementoCliccato.css("background-color", "green")
                }
            },

            error : function (richiesta,stato) {
                alert("E' avvenuto un errore. "+stato);
            }
        });
    })


});