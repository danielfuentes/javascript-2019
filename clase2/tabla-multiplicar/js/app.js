window.onload = function(){
    let entrar = true;
    while (entrar=== true) {
        let tabla = prompt("Indique el número de la tabla deseada");
        if(tabla <1 || tabla >10){
            alert("Sólo debe indicar tablas del 1 al 10");
            continue;
        }else{
            for (let i = 1; i<=10;i++){
                console.log(tabla+ " x "+i+ " = "+tabla*i);
                document.write("<h1>");
                document.write(tabla+ " x "+i+ " = "+tabla*i+"<br>");
                document.write("</h1>");

            }
            break;
            
        }    
    }
    

    





}