//window.onload = function(){

//}

window.addEventListener('load',cargar);

function cargar(){
    let body = document.body;
    let miTitulo = document.querySelector('.titulo');
    console.log(body);
    let miH1 = document.createElement('h1');
    console.log(miH1);
    miH1.innerHTML = "Ejemplo de Eventos";
    miH1.classList.add('text-center', 'text-primary');
    miTitulo.append(miH1);
    //--------------
    let contador = 0;
    let tiempo = setInterval(intervalo,1000);

    function intervalo(){
        contador++;
        if(contador === 5){
            alert("Hermano querido estas ahi!!!!!!!");
        }
    }

    window.onmousemove= function(){
        contador = 0;
       // tiempo = setInterval(intervalo,1000);
    }




}
