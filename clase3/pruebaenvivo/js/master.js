window.onload = function(){
    let body = document.body;
    let miH1 = document.createElement('h1');
    console.log(miH1);
    miH1.innerHTML= "<strong>Hola hermano querido !!!!</strong>";
    //miH1.setAttribute('class','text-center');
    //miH1.setAttribute('class','text-primary');
    miH1.classList.add('text-center','text-primary');

    body.append(miH1);

    let miUl = document.querySelector('.frutas');
    let miLi = document.createElement('li');
    miLi.innerHTML = "Pomelo";
    miUl.append(miLi);



}