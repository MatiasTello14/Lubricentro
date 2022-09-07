/*estructura de bucle while*/

let entrada = prompt("Ingrese el nombre de usuario");

while (entrada != "ESC") {
    switch (entrada){
        case "MATIAS17":
            alert ("Bievenido Matias");
            break;
        case "LUCAS18":
            alert ("Bienvenido Lucas");
            break;
        case "MARTIN19":
            alert ("Bienvenido Martin");
            break;
        default:
            alert ("NO EXISTE UN USUARIO QUE CONTENGA LOS DATOS INGRESADOS")
    }

    entrada = prompt ("Ingrese el nombre de usuario");
}
