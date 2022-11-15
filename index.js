const div = document.getElementById ("relojes")
const boton = document.getElementById ("boton")
const modalContainer = document.getElementById ("modal-container")
const cantidadCarrito = document.getElementById ("cantidadCarrito")

let carrito = JSON.parse (localStorage.getItem("carrito")) || [];

fetch ("./data.json")
.then (response => response.json())
.then (data => { 
  data.forEach (producto => {
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
    boton.addEventListener("click", () => { 
      comprarProducto(producto)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se agrego correctamente',
        showConfirmButton: false,
        timer: 1500
      }) 
    })
  })
})

let comprarProducto = (producto) => {
  let productoExiste = carrito.find(item => item.id === producto.id)

  if(productoExiste !== undefined){
    productoExiste.precio = productoExiste.precio + producto.precio,
    productoExiste.cantidad = productoExiste.cantidad + 1
  }else{
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      caracteristicas: producto.caracteristicas,
      cantidad: producto.cantidad 
    })
  }
  console.log(carrito);
  carritoCounter();
  saveLocal();
}

  const pintarCarrito = () => { 
  modalContainer.innerHTML = ""
  modalContainer.style.display ="flex"
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header"
  modalHeader.innerHTML = `
  <h1 class ="modal-header-title">Carrito</h1>
  `
  modalContainer.append (modalHeader);

  const modalButton = document.createElement ("div")
  modalButton.innerText = `X`;
  modalButton.className = "modal-header-button";

  modalButton.addEventListener("click", () => {
    modalContainer.style.display = "none"
  })

  modalHeader.append (modalButton);

  carrito.forEach ((producto) => { 

    let carritoContent = document.createElement ("div")
    carritoContent.className = "modal-content"
    carritoContent.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: $ ${producto.precio}</p>
      <p>Cantidad: ${producto.cantidad}</p>
      <p>Total: $ ${producto.cantidad * producto.precio}</p>
    `

    modalContainer.append (carritoContent)

    let eliminar = document.createElement ("span")
    eliminar.innerText = "X"
    eliminar.className = "delete-product"
    carritoContent.append (eliminar)

    eliminar.addEventListener("click", eliminarProducto)
  });

  const total = carrito.reduce((acumulador, prod) => acumulador + prod.precio * prod.cantidad, 0) 

  const totalElement = document.createElement ("div")
  totalElement.className = "total-content"
  totalElement.innerHTML = `total a pagar: ${total} $`;

  modalContainer.append (totalElement)
}

boton.addEventListener ("click", pintarCarrito);

const eliminarProducto = () => {
  const foundId =carrito.find ((element) => element.id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId; 
  })

  carritoCounter();
  saveLocal();
  pintarCarrito();
}

const carritoCounter = () => {
  cantidadCarrito.style.display = "online"

  const carritoLength = carrito.length

  localStorage.setItem ("carritoLength", JSON.stringify (carritoLength))

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem ("carritoLength"));
}


const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify (carrito))
}

carritoCounter();
