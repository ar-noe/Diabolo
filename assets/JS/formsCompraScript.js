document.getElementById('addProduct').addEventListener('click', function () {
    const productList = document.getElementById('productList');
    const newProductContainer = document.createElement('div');
    newProductContainer.classList.add('product-container');


    /*para agregar otro producto */
    newProductContainer.innerHTML = `
                <label for="producto">Producto:</label>
                        <select id="producto" name="producto">
                            <option value="Producto 1">Máscara de Moreno con careta metálica</option>
                            <option value="Producto 2">Pollerín o faldilla de moreno</option>
                            <option value="Producto 3">Máscara de Diablo Rey</option>
                            <option value="Producto 4">Traje bordado con pedrería y escamas metálicas</option>
                            <option value="Producto 5">Penacho de plumas largas multicolores</option>
                            <option value="Producto 6">Brazaletes y tobilleras con plumas</option>
                            <option value="Producto 7">Chaleco bordado con figuras textiles</option>
                            <option value="Producto 8">Traje de kullawa mujer</option>
                            <option value="Producto 9">Montera con plumas y cintas</option>
                            <option value="Producto 10">Faja ancha con diseños andinos (chumpi)</option>
                            <option value="Producto 11">Máscara de toro Waka Waka</option>
                            <option value="Producto 12"> Faldellín corto con campanillas</option>
                            <option value="Producto 13">Falda corta con vuelo y bordados afroandinos</option>
                            <option value="Producto 14">Sombrero tradicional</option>
                            <option value="Producto 15"> Montera con flores y cintas</option>
                            <option value="Producto 16">Chaqueta corta bordada Pujllay</option>
                            <option value="Producto 17">Chaqueta con motivos de llamas</option>
                            <option value="Producto 18">Sombrero decorado con espejos y pompones</option>
                            <option value="Producto 19">Vestido de dama camba con vuelos y flores</option>
                            <option value="Producto 20">Sombrero de paja tipo camba</option>
                            <option value="Producto 21">Botas altas con cascabeles</option>
                            <option value="Producto 22">Camisa bordada de caporal</option>
                        </select>
                        <label for="cantidad">Cantidad:</label>
                        <input type="number" id="cantidad" name="cantidad" min="1" value="1">
                        <span class="remove-product" style="display:none;">Eliminar</span>
            `;

    productList.appendChild(newProductContainer);

    // Agregar evento para eliminar el producto
    newProductContainer.querySelector('.remove-product').addEventListener('click', function () {
        productList.removeChild(newProductContainer);
    });
});


document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    const nombre = document.getElementById('nombre').value;
    const alias = document.getElementById('alias').value;
    const correo = document.getElementById('correo').value;
    const departamento = document.getElementById('departamento').value;
    const ciudad = document.getElementById('ciudad').value;
    const direccion = document.getElementById('direccion').value;

   // Array de precios de los productos
const precios = [550, 300, 700, 900, 180, 100, 320, 700, 150, 100, 200, 180, 180, 60, 220, 400, 310, 130, 160, 90, 480, 270];


// Obtener productos y cantidades
const productos = [];
let indexx = 0; // Índice para acceder a los precios

// Seleccionar todos los contenedores de productos
const productContainers = document.querySelectorAll('.product-container');

// Recorrer cada contenedor de producto
productContainers.forEach(container => {
    // Obtener el nombre del producto seleccionado
    const producto = container.querySelector('select[name="producto"]').value;
    
    // Obtener la cantidad ingresada
    const cantidad = container.querySelector('input[name="cantidad"]').value;
    
    // Obtener el precio del producto usando el índice
    const precioProducto = precios[indexx];
    
    // Agregar el producto, cantidad y precio al array de productos
    productos.push({ producto, cantidad, precioProducto });
    
    // Incrementar el índice para el siguiente producto
    indexx++;
});



    // confirmar los datos se registraron
    console.log('Nombre:', nombre);
    console.log('Alias:', alias);
    console.log('Correo:', correo);
    console.log('Departamento:', departamento);
    console.log('Ciudad:', ciudad);
    console.log('Dirección:', direccion);
    console.log('Productos:', productos);

    // Almacenar datos en localStorage
    const datosUsuario = {
        nombre,
        alias,
        correo,
        departamento,
        ciudad,
        direccion
    };
    localStorage.setItem('datosUsuario', JSON.stringify(datosUsuario));



    // redirigir a otra página y mostrar un mensaje de éxito
    alert('Registro exitoso');
    window.location.href = './FacturaConfirmacion.html';
});



