window.onload = function(){
    let body = document.body;
    let boton = document.querySelector('.btn');
    console.log(body);
    let miP = document.querySelector('.subtitulo');
    let miH2 = document.createElement('h2');
    //miH2.innerHTML = "<strong>Creando una Etiqueta dinamicamente</strong>";
    let contenido = document.createTextNode = "Probando";
    miH2.append(contenido);
    //miH2.setAttribute('class','text-center');
    //miH2.setAttribute('class','text-warning');
    //miH2.setAttribute('class','bg-danger');
    miH2.classList.add('text-center','bg-danger','text-warning');
    
    miP.appendChild(miH2);
    
    boton.onclick = function(){
        //miH2.classList.remove('bg-danger');
        //miH2.classList.add('bg-primary');
        miH2.classList.toggle('bg-danger');
    }


}