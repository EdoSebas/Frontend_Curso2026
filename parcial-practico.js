const productos = [
    {
        id: 1,
        nombre: "Laptop Gamer",
        precio: 3500000
    },
    {
        id: 2,
        nombre: "Monitor Full HD",
        precio: 750000
    },
    {
        id: 3,
        nombre: "Teclado Mecanico",
        precio: 280000
    },
    {
        id: 4,
        nombre: "Mouse Inalambrico",
        precio: 120000
    },
    {
        id: 5,
        nombre: "Audifonos Bluetooth",
        precio: 210000
    },
    {
        id: 6,
        nombre: "Tablet 10 pulgadas",
        precio: 980000
    }
];

let carrito = [];

function formatoPrecio(valor) {
    return valor.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
    });
}

function agregarProducto(idProducto) {
    const producto = productos.find((item) => item.id === idProducto);
    const productoEnCarrito = carrito.find((item) => item.id === idProducto);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }

    mostrarCarrito();

    Swal.fire({
        icon: "success",
        title: "Producto agregado correctamente",
        text: `${producto.nombre} fue agregado al carrito.`,
        confirmButtonText: "Aceptar"
    });
}

function eliminarProducto(idProducto) {
    carrito = carrito.filter((item) => item.id !== idProducto);
    mostrarCarrito();
}

function vaciarCarrito() {
    if (carrito.length === 0) {
        Swal.fire({
            icon: "info",
            title: "Carrito vacio",
            text: "No hay productos para eliminar.",
            confirmButtonText: "Aceptar"
        });
        return;
    }

    Swal.fire({
        icon: "warning",
        title: "Vaciar carrito",
        text: "Desea eliminar todos los productos?",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No",
        confirmButtonColor: "#dc3545"
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            carrito = [];
            mostrarCarrito();

            Swal.fire({
                icon: "success",
                title: "Carrito vaciado",
                text: "Todos los productos fueron eliminados.",
                confirmButtonText: "Aceptar"
            });
        }
    });
}

function calcularTotal() {
    return carrito.reduce((total, producto) => {
        return total + producto.precio * producto.cantidad;
    }, 0);
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById("listaCarrito");
    const totalCarrito = document.getElementById("totalCarrito");

    listaCarrito.innerHTML = "";

    if (carrito.length === 0) {
        listaCarrito.innerHTML = `
            <tr>
                <td colspan="5" class="text-center text-muted">El carrito esta vacio.</td>
            </tr>
        `;
    } else {
        carrito.forEach((producto) => {
            const subtotal = producto.precio * producto.cantidad;

            listaCarrito.innerHTML += `
                <tr>
                    <td>${producto.nombre}</td>
                    <td>${formatoPrecio(producto.precio)}</td>
                    <td>${producto.cantidad}</td>
                    <td>${formatoPrecio(subtotal)}</td>
                    <td>
                        <button class="btn btn-sm btn-outline-danger" onclick="eliminarProducto(${producto.id})">
                            <i class="bi bi-trash"></i>
                        </button>
                    </td>
                </tr>
            `;
        });
    }

    totalCarrito.textContent = formatoPrecio(calcularTotal());
}
