try{
// Recuperar datos de localStorage
const datosAlmacenados = JSON.parse(localStorage.getItem('datosUsuario'));

if (datosAlmacenados) {
    // Mostrar datos en la factura
    const { nombre, alias, correo, departamento, ciudad, direccion, productos } = datosAlmacenados;

    let facturaHTML = `<p><strong>Nombre:</strong> ${nombre}</p>`;
    facturaHTML += `<p><strong>Alias:</strong> ${alias}</p>`;
    facturaHTML += `<p><strong>Correo:</strong> ${correo}</p>`;
    facturaHTML += `<p><strong>Departamento:</strong> ${departamento}</p>`;
    facturaHTML += `<p><strong>Ciudad:</strong> ${ciudad}</p>`;
    facturaHTML += `<p><strong>Dirección:</strong> ${direccion}</p>`;
    facturaHTML += `<h3>Productos</h3>`;
    facturaHTML += `<table>`;
    facturaHTML += `<tr><th>Producto</th><th>Cantidad</th><th>Precio Unitario</th><th>Total</th></tr></table>`;

    
    let total = 0;
    let index = 0;
    productos.forEach(item => {
        const subtotal = item.cantidad * item.precioProducto; 
        total += subtotal;
        facturaHTML += `<tr>
            <td>${item.producto}</td>
            <td>${item.cantidad}</td>
            <td>Bs ${item.precioProducto}</td>
            <td>Bs ${subtotal}</td>
        </tr>`;
    });

    facturaHTML += `</table>`;
    facturaHTML += `<h3>Total: Bs ${total}</h3>`;

    // Insertar el contenido en el contenedor
    document.getElementById('facturaContent').innerHTML = facturaHTML;
} else {
    document.getElementById('facturaContent').innerHTML = '<p>No se encontraron datos de factura.</p>';
}
}
catch(error)
{
    document.getElementById('facturaContent').innerHTML = '<p><strong>Nombre:</strong> nombre</p>'+
                                                         '<p><strong>Alias:</strong> ${alias}</p>'+
                                                         '<p><strong>Correo:</strong> ${correo}</p>'+
                                                         '<p><strong>Departamento:</strong> ${departamento}</p>'+
                                                         '<p><strong>Ciudad:</strong> ${ciudad}</p>'+
                                                         '<p><strong>Dirección:</strong> ${direccion}</p>'+
                                                         '<h3>Productos</h3>'+
                                                         '<table> <tr><th>Producto</th><th>Cantidad</th><th>Precio Unitario</th><th>Total</th></tr></table>';
}
finally{
    //mensaje para aceptar compra
    document.getElementById('AceptarCompra').addEventListener('click', function(){
    alert('El pedido ha sido registrado');
    window.location.href = './index.html';
    });
}