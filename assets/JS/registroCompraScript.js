document.getElementById('btnRegistro').addEventListener('click', function() {
    const nombre = document.getElementById('loginName').value;
    const correo = document.getElementById('loginCorreoEl').value;
    const contraseña = document.getElementById('loginPassword').value;

    // Validar el correo electrónico
    if (!validarCorreo(correo)) {
        alert('Por favor, ingresa un correo electrónico válido.'); // Mensaje de error
        return; // Detener la ejecución si el correo no es válido
    }

    // Almacenar los datos en localStorage
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('correo', correo);
    localStorage.setItem('contraseña', contraseña);
    
    // Redirigir a la página de compra
    window.location.href = './formsCompra.html';
});

// Función para validar el correo electrónico
function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato del correo
    return regex.test(correo); // Devuelve true si el correo es válido, false en caso contrario
}

// Ver menú interactivo
document.getElementById('logMenBtn').addEventListener('click', function() {
    const menuContent = document.getElementById('menuContent');
    const logMenBtnAlt = document.getElementById('logMenBtnAlt');
    if (menuContent.style.display === 'none' || menuContent.style.display === '') {
        menuContent.style.display = 'block'; 
        logMenBtnAlt.style.display = 'block'; 
    } 
});

// Ocultar
document.getElementById('logMenBtnAlt').addEventListener('click', function() {
    const menuContent = document.getElementById('menuContent');
    const logMenBtnAlt = document.getElementById('logMenBtnAlt');
    if (!(menuContent.style.display === 'none' || menuContent.style.display === '') ){
        menuContent.style.display = 'none'; 
        logMenBtnAlt.style.display = 'none'; 
    }
});
