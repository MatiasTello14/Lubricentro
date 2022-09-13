let precioServicio = 0;
let contador = 0;
let gastoTotal = 0;

alert ('Usted debera ingresar el precio de los servicios que desea realizarle a su vehiculo');

function Precio()  {
    precioServicio= Number(prompt ('Ingrese el precio de cada uno de los servicios' + ':'));

    while (precioServicio > 0) {
        gastoTotal = calcularTotal (precioServicio);
        contador++;
        precioServicio= Number(prompt ('Ingrese el precio de cada uno de los servicios' + ':'));
    }

    if (precioServicio <= 0 || isNaN(precioServicio)){
        console.log ('el valor ingresado es incorrecto');
    }
}

function calcularTotal (servicio){
    return gastoTotal + servicio;
}

function Total(){
    console.log('cantidad de servicios:' + contador);
    console.log ('el precio total es $' + gastoTotal);
}

Precio();
Total();
