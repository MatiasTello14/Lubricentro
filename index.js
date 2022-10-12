const productos = [
    {
      id: 1,
      nombre: "SmartWatch Nitcom Nt02 Smartband", 
      precio: 1900, 
      imagen: "https://dxelectronica.com.ar/wp-content/uploads/2021/06/NT02-1-1.jpg", 
      caracteristicas: "El Smartwatch Nictom NT02 cuenta con una pantalla OLED de bajo consumo y la duración de la batería es de 2 a 5 días dependiendo su uso. Compatible con Android e iOS, permite recibir notificaciones de mensajes de WhatsApp y llamadas entrantes. Además, es resistente a la sudoración y salpicaduras."
    },
    {
      id: 2,
      nombre: "SrmartWatch Amazfit Gts 2 mini", 
      precio: 23000, imagen: "https://dxelectronica.com.ar/wp-content/uploads/2021/11/AMAZFITGTS2MINIROSA-1.jpg", 
      caracteristicas: "El Amazfit GTS 2 Mini es un poco más pequeño que el modelo normal, con una pantalla AMOLED de 1,55″ y resolución de 354 x 306 píxeles. Como resultado, tenemos un reloj un poco más pequeño y también más ligero que proporciona todas las ventajas de un smartwatch super completo."
    },
    {
      id: 3, 
      nombre: "SmartWatch Xioami mi band 5", 
      precio: 8600, imagen: "https://dxelectronica.com.ar/wp-content/uploads/2022/03/MIBAND5FILMMALLA-10.jpg", 
      caracteristicas: "Este smartwatch cuenta con 11 tipos de ejercicio que puede monitorizar, como elíptica, yoga y saltar lazo, entre otros. Es resistente al agua pues soporta hasta 50 metros de profundidad.  Además, tiene una batería de 125 mAh que puede durar hasta 14 días encendido o hasta su próxima carga."
    },
    {
      id: 4, 
      nombre: "SmartWatch Skemi 1250", 
      precio: 3300, imagen: "https://dxelectronica.com.ar/wp-content/uploads/2021/06/SKMEI1250-1.jpg", 
      caracteristicas: "El SmartWatch SKMEI 1250 es un reloj deportivo de diseño funcional. Ideal para quienes son amantes del deporte, entre sus principales funciones, se encuentran: contador de pasos, de calorías, recordatorio de llamada, medidor de distancia y cámara remota. Es sumergible hasta 50 Mts y no necesita cargar, ya que usa batería."
    },
    {
      id: 5, 
      nombre: "SmartWatch Amazfit gtr3", 
      precio: 40000, imagen: "https://dxelectronica.com.ar/wp-content/uploads/2021/10/AMAZFITGTR3-1.jpg", 
      caracteristicas:"El Amazfit GTR 3 incluye 12 modos de deportes distintos, como andar, nadar, escalar, correr por la montaña o esquí. Su gran pantalla AMOLED de alta definición con una densidad de píxeles de 326 ppp es clara y vívida, ya sea para ver la hora o consultar cualquiera de tus aplicaciones favoritas. Aparte de todas sus funciones alucinantes, el Amazfit GTR 3 es un reloj espectacular que te permite controlar el tiempo con total seguridad."
    },
    {
      id: 6, 
      nombre: "SmartWatch Y11,2", 
      precio: 3250, imagen:"https://dxelectronica.com.ar/wp-content/uploads/2021/06/Y1-2.jpg", 
      caracteristicas:"Con la más variada gama de colores, este reloj cuenta con un diseño súper moderno y resistente para el uso diario. Cuenta con las principales funciones para llevar una vida sana y plena, pudiendo acceder a todas sus funciones de manera ágil y rápida gracias a su pantalla touch de 1,2."},
];

let [a, b, c, d, e, f] = productos;
console.log(a, b, c, d, e, f);

const div = document.getElementById ("relojes")
const carro = document.getElementById ("boton")

let carrito = []

productos.forEach (producto => {
  let productoRender = document.createElement ("div")
  productoRender.innerHTML = `
    <h2 class="tituloProducto">${producto.nombre}</h2>
    <p class="precioProducto">Precio: $${producto.precio} </p>
    <img class="imagenProducto" src="${producto.imagen}">
    <p class="caract">Caracteristicas: ${producto.caracteristicas}</p>
    <button type="button" id=${producto.id} class="btn btn-dark">Agregar al carrito</button>
  `
  div.append(productoRender)
  const boton = document.getElementById (producto.id)
  boton.addEventListener("click", () => comprarProducto(producto))
})

let comprarProducto = (producto) => {
  let productoExiste = carrito.find(item => item.id === producto.id)

  if(productoExiste != undefined){
    productoExiste.precio = productoExiste.precio + producto.precio,
    productoExiste.cantidad = productoExiste.cantidad + 1
  }else{
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      caracteristicas: producto.caracteristicas,
      cantidad: 1
    })
  }
  localStorage.setItem("carrito", JSON.stringify(productoExiste))
}

boton.addEventListener ("click", () => console.log (carrito))
