function saludar(nombre, apellido){
    let mensaje = `Bienvenido ${nombre} ${apellido} a Lubricentro Abril!!`;
    alert (mensaje);
}
let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");

saludar(nombre, apellido);

alert ("Coloque el servicio que desea realizarle a su vehiculo");

let servicios = [
    {id: 1, nombreServicio: "cambio de aceite", precio: 5000},
    {id: 2, nombreServicio: "cambio de filtros de aceite, combustible y habitaculo", precio: 6000},
    {id: 3, nombreServicio: "control de los fluidos", precio: 3000},
];
  let contenedor = document.getElementById("contenedor");
  
  let formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    contenedor.innerHTML = "";
    let inputs = e.target.children;
  
    let servis = servicios.find((item) => item.nombreServicio === inputs[0].value);
    let div = document.createElement("div");
    div.innerHTML = `
      <h2>Id: ${servis.id}</h2>
      <p>Nombre: ${servis.nombreServicio}</p>
      <b>$${servis.precio}</b>
    `;
    div.className = "gris";
    contenedor.append(div);
  });
