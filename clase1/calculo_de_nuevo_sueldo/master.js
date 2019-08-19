window.onload=function(){
    //Haciendo uso de ciclos - condiciones - parseo de datos - operaciones - prompt - confirm alert
    //Ojo esta es una forma de programar secuencial, lo hago así para que ustedes entiendan las distintas funcionalidades de javascript
    var entrar = true
    while (entrar==true) {
    
        
        do {
            var nombre = prompt("Cual es tu nombre?")
            if(nombre==null || nombre == ""){
                alert("Nombre no puede ser blanco !!!")
            }
        } while (nombre==null || nombre == "");

        do {
            var sueldo = parseFloat(prompt("Cual es tu sueldo?"))    
            if (isNaN(sueldo)||sueldo<=0){
                alert("Sueldo no puede ser blanco!!!")
            }
        } while (isNaN(sueldo)||sueldo<=0   );
 

        
        var porcentaje = parseInt(prompt("Porcentaje de aumento deseado?"))
        do {
            if(isNaN(porcentaje) || porcentaje<0){
                alert("Porcentaje de aumento no puede ser cero Capo!!!")
            }

        }while (isNaN(porcentaje) || porcentaje<0)
        var nuevoSueldo = ((sueldo*porcentaje)/100)+sueldo
        alert("Estimado(a) " +nombre + "Su nuevo sueldo es: "+nuevoSueldo)
        entrar = confirm("Desea continuar?")

    }
    location.href = "https://adanielf.wordpress.com"

}