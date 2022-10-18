const div = document.getElementById ("relojes")
const carro = document.getElementById ("boton")

let carrito = []

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
    relojes.append(productoRender)
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
  localStorage.setItem("carrito", JSON.stringify(productoExiste));
}

boton.addEventListener ("click", () => {
  console.log(carrito)
  let timerInterval

  Swal.fire({
  
    title: 'Cargando productos...',
  
    html: 'I will close in <b></b> milliseconds.',
  
    timer: 2000,
  
    timerProgressBar: true,
  
    didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
  })
})
