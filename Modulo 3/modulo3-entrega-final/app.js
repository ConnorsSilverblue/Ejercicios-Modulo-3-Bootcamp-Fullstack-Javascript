
const productos = [
    { id: 1, nombre: "Polera", precio: 14990 },
    { id: 2, nombre: "Pantalón", precio: 24990 },
    { id: 3, nombre: "Zapatillas", precio: 39990 }
];

let carrito = [];

const formatoMoneda = (monto) => {
    return new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(monto);
};


const agregarAlCarrito = (id, cantidad) => {
    const producto = productos.find(p => p.id === id);

    if (!producto) {
        console.log(`Error: El producto con ID ${id} no existe.`);
        return;
    }

    const itemEnCarrito = carrito.find(item => item.id === id);

    if (itemEnCarrito) {
        itemEnCarrito.cantidad += cantidad;
        console.log(`Actualizado: ${producto.nombre} ahora tiene ${itemEnCarrito.cantidad} unidades.`);
    } else {
        carrito.push({ id: id, cantidad: cantidad });
        console.log(`Agregado: ${cantidad}x ${producto.nombre} al carrito.`);
    }
};


const removerDelCarrito = (id) => {
    carrito = carrito.filter(item => item.id !== id);
    console.log(`Producto con ID ${id} eliminado (si existía).`);
};


const subtotal = () => {
    let total = 0;
    for (const item of carrito) {
        const productoReal = productos.find(p => p.id === item.id);
        if (productoReal) {
            total += productoReal.precio * item.cantidad;
        }
    }
    return total;
};


const aplicarDescuento = (codigo) => {
    const totalBase = subtotal();
    let resultado = { 
        total: totalBase, 
        detalle: "Sin descuento aplicado" 
    };

    if (codigo === "PROMO10") {
        if (totalBase >= 30000) {
            const descuento = totalBase * 0.10;
            resultado.total = totalBase - descuento;
            resultado.detalle = "10% de descuento (PROMO10)";
        } else {
            resultado.detalle = "Código PROMO10 requiere compra sobre $30.000";
        }
    } else if (codigo === "ENVIOGRATIS") {
        if (totalBase >= 25000) {
            const valorEnvio = 3990;
            resultado.total = Math.max(0, totalBase - valorEnvio); 
            resultado.detalle = "Descuento de envío (ENVIOGRATIS)";
        } else {
            resultado.detalle = "Código ENVIOGRATIS requiere compra sobre $25.000";
        }
    } else {
        if (codigo) {
            resultado.detalle = "Código inválido";
        }
    }
    
    return resultado;
};

const resumen = (codigoPromocional) => {
    const calculo = aplicarDescuento(codigoPromocional);
    const montoSubtotal = subtotal();

    let listaProductos = "";
    carrito.forEach(item => {
        const p = productos.find(prod => prod.id === item.id);
        listaProductos += `\n  - ${p.nombre} x${item.cantidad} | Total: ${formatoMoneda(p.precio * item.cantidad)}`;
    });

    return `
Resumen de Compra
================================
Productos en carro:${listaProductos}
--------------------------------
Subtotal: ${formatoMoneda(montoSubtotal)}
Cupón:    ${codigoPromocional || "Ninguno"}
Mensaje:  ${calculo.detalle}
--------------------------------
TOTAL FINAL: ${formatoMoneda(calculo.total)}
================================
`;
};


console.log("--- INICIANDO PRUEBAS ---");
agregarAlCarrito(1, 2); 
agregarAlCarrito(3, 1); 
agregarAlCarrito(2, 1); 

console.log(resumen("PROMO10"));