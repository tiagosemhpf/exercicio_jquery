$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const inserirNovaTarefa = $('#nova-tarefa').val();
        const NovaTarefa = $('<li></li>').text(inserirNovaTarefa);

        $('#lista-tarefa').append(NovaTarefa);
        $('#nova-tarefa').val("")
    })

    $('#lista-tarefa').on('click', 'li', function() {
        $(this).toggleClass('tarefa-concluida');
    })
})