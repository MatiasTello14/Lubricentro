const servicios = [
    {id: 1, nombre: "Cambio de aceite", precio: 5000},
    {id: 2, nombre: "Cabio de filtros de aceite, combustible y habitaculo", precio: 6000},
    {id: 3, nombre: "Control de todos los fluidos", precio: 3000}
];

let precios = servicios.map (item => item.precio);
let nombreServicios = servicios.map (item => item.nombre);
let precioFinal = servicios.map (item => { 
    return {
        id: item.id,
        nombre: item.nombre,
        precio: item.precio + item.precio * 0.21
    };
});

console.log (precioFinal);