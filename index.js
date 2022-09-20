function saludar(nombre, apellido){
    let mensaje = `Bienvenido ${nombre} ${apellido} a Lubricentro Abril!!`;
    alert (mensaje);
}
let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");

saludar(nombre, apellido);


const servicios = [
    {id: 1, nombreServicio: "cambio de aceite", precio: 5000},
    {id: 2, nombreServicio: "cambio de filtros de aceite, combustible y habitaculo", precio: 6000},
    {id: 3, nombreServicio: "control de los fluidos", precio: 3000}
];

let nombreServicio = prompt ("Ingrese el servicio que desea realizarle a su vehiculo");
let encontrado = servicios.find(servicios => servicios.nombreServicio === nombreServicio);
let mensaje = `
    nombre: ${encontrado.nombreServicio};
    $${encontrado.precio}
    `
alert (mensaje);
