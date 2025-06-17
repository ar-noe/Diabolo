$(document).ready(function() {
    // Alternar la visibilidad del menú al hacer clic en el icono
    $('#ImgLgMenu').on('click', function(event) {
        event.stopPropagation(); // Evitar que el clic se propague al documento
        $('#menu').toggle(); // Alternar la visibilidad del menú
    });

    // Cerrar el menú si se hace clic fuera de él
    $(document).on('click', function(event) {
        if (!$(event.target).closest('#menu').length && !$(event.target).is('#ImgLgMenu')) {
            $('#menu').hide(); // Ocultar el menú
        }
    });
});
