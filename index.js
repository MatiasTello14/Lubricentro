function saludar(nombre, apellido){
    let mensaje = `Bienvenido ${nombre} ${apellido} a Lubricentro Abril!!`;
    alert (mensaje);
}
let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");

saludar(nombre, apellido);

let listas = document.getElementById("lista")
const servicios = [
    {id: 1, nombreServicio: "cambio de aceite", precio: 5000},
    {id: 2, nombreServicio: "cambio de filtros de aceite, combustible y habitaculo", precio: 6000},
    {id: 3, nombreServicio: "control de los fluidos", precio: 3000}
];

servicios.forEach(servicio => {
    let item = document.createElement("div");
    item.innerHTML = `
    <h2>Id: ${servicio.id}</h2>
    <p>Producto: ${servicio.nombreServicio}</p>
    <p>$${servicio.precio}</p>
    `;
    listas.className = "verde";
    listas.append(item)
});
