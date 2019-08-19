window.onload = function(){
    //let nombre = "Dani";
    //let nombre = "Herni";
    //console.log(nombre);


/*
    let valor = prompt("indique el número");
    console.log(valor);
    for( let i=1;i*valor < 135;i++){
        console.log(valor+" x "+ i + "="+ i*valor);
        document.write("<h2>"+valor+" x "+ i + "="+ i*valor+"</h2>");
    }

    let deAcuerdo = confirm("Desea continuar?");

*/

let dado = Math.ceil(Math.random()*6);
console.log(dado);
switch (dado) {
    case 2:
    case 4:
    case 6:
        console.log("El número "+dado+ " es Par")
        break;

    default:
        console.log("El número "+dado+ " es Impar")
        break;
}

//--------   Otro Ejercicio -------
let estudiante ={
    nombre: "Daniel",
    curso:  "TN02",
    dni: 12345678,
    email: "dfuentes@digitalhouse.com"
}
for( prop in estudiante){
    console.log( prop +":"+ estudiante[prop]);
}
let nuevoArray = [];
function fromObjectToArray(arrayEstudiante){
 for( prop in arrayEstudiante){
     nuevoArray.push(prop);
 }   
 return nuevoArray;
}
fromObjectToArray(estudiante);
console.log(nuevoArray);

let fondo = prompt("ingrese el color deseado para el fondo");
document.body.style.backgroundColor = fondo;


}