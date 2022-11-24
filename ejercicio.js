//Ejercicio 14

let numero = prompt ("ingrese un numero");
if (numero > 10) {
    document.write("es mayor a 10");
} else if (numero <= 10){
    document.write ("es menor o igual a 10");
}else {
    document.write ("no es un numero")
}

//Ejercicio 15
function esNumeroDeLASuerte (num1) {
    if((num1>0)&&(num1%2 ||num1%3 ==0) && (num1 !=15)) {
        console.log ("Es un numero de la suerte")
    }else 
    console.log ("No es un numero de la suerte")
}

let productos = ["esponja","detergente", "lavandina", "desodorante"]
let stock = [15,43,6,60]

let catalogo = [ 
    ["esponja",15]
    ["detergente",43]
    ["lavandina",6]
    ["desodorante",60]
]
for (let i=0; i<productos.length ;i++) {
    catalogo[i] = [];
    catalogo[i](productos[i])
    console.log (catalogo)
}
