//Amigas y amigos, les recuerdo que cada uno de nosotros tenemos diversas formas de programar, las soluciones de ejercicios que ustedes puedan ver tomenlas como ejemplos de como se pueden hacer las cosas, no lo tomen como una regla, sólo son formas de hacer las cosas. Se les aprecia-


//Al terminar de cargar la página se llama a la función tareas, les recuerdo que esto también lo pueden hacer así:
/* 
window.onload = function(){

Aquí es donde colocarían todo el código JS

}
*/ 


window.addEventListener('load', tareas);


function tareas() {
	/*Para iniciar le solicitaremos al visitante por medio de un prompt() la cantidad de tareas que desea agregar. Dicha solicitud se debe hacer siempre que el valor ingresado NO sea un número y cuando siendo un número sea inferior a 3. Alertar al usuario si hay error al momento de ingresar el dato.*/
	//Amigas y amigos, motivado a que al declarar las variables dentro del while quedan en ese scope, (ambito), me dispuse a programarlo con un do while, hago lo mismo pero en este caso si puedo usar la variable de la cantidad de tareas sin problemas
	let cantTareas = 0;
	let confirma = false;
	do {
		cantTareas = window.prompt('Cantidad de tareas?');
		//Por el problea que estaba confrontando Tomy, procure de una vez asegurar que el valor ingresado sea un número, paseo el dato recibido
		cantTareas = Number(cantTareas);
		if (isNaN(cantTareas) || cantTareas < 3) {
			window.alert('Ingresa un número mayor o igual a 3');
			continue;
		}
		/*Después de haber validado el punto anterior, pediremos confirmación al visitante si el número que ingresó está correcto. En caso afirmativo continuaremos, en caso negativo volveremos a solicitar el número de tareas.*/
		console.log(cantTareas);
		confirma = window.confirm('¿Quieres ingresar ' + cantTareas + ' tareas?');
	} while (isNaN(cantTareas) || cantTareas < 3 || !confirma);

	//Aqui verifico que realmente tenga en la variable la cantidad de tareas indicadas por el usuario
	console.log(cantTareas);

	/*Ahora, vamos a solicitar por cada tarea, el texto de la misma. Tendremos que validar para cada texto que el mismo no esté vacío.*/
	//Aquí declar el array vacio, el cual luego llenaré con las tareas indicadas por el usuario
	var listadoTareas = [];

	for (var i = 1; i <= cantTareas; i++) {
		do {
			var textoTarea = window.prompt('Ingresa el texto de la tarea #' + i);
			if (textoTarea === '') {
				window.alert('Hermano querido el texto no puede estar vacío');
				continue;
			}
			//Aquí voy llenando el array que declaramos vacio, con cada una de las tareas que el usuario coloque
			listadoTareas.push(textoTarea);
		} while (textoTarea === '');
	}
	//Aquí verifico que realmente tenga mi array con la cantidad de tareas 
	console.log(listadoTareas);

	/*Amigas y amigos, aquí hago la captura del documento cuerpo de mi documento y lo guardo en la variable body, lo hago para poder tener el control que todo se va armar de manera dinámica, recuerden en nuestro HTML, no tengo nada escrito, todo lo que aparecrá en nuestro documento lo creare dinamicamente por Javascript.*/	
	let body = document.body;

	/*Para cada uno de los textos de las tareas, vamos a generar un elemento de lista <li> en nuestro documento html, todos deberán estar dentro de un mismo <ul>. Así mismo vamos a crear desde JS un título <h1>. Con el texto "To Do List - Cantidad total: N". Donde N será la cantidad total de tareas ingresadas. Este título deberá estar antes del listado.*/

	/*Luego de crear la lista de tarea, debe ahora hacer que las mismas esten contenidas dentro de un elemento “a”.  y al momento de accionar click sobre alguna de ellas debemos redirigir a la pagina web de Digital House, teniendo en cuenta el siguiente enlace:  “https://www.digitalhouse.com” y la misma debe abrirla en una página nueva considerando el atributo (target). */

	//Aquí creo mi elemento ul
	let miUl = document.createElement('ul');
	//Aquí hago el ciclo para recorrer el listado de la tareas indicadas por el usuario y luego poder mostrar en mi HTML., ojo en la condición no le coloco el <= ya que como es un array, este comienza desde cero.
	for(let i = 0; i< listadoTareas.length;i++){
		//Aquí creo mi elemento li
		let miLi = document.createElement('li');
		//Aquí creo mi elemento a (Enlace)
		let miA = document.createElement('a');
		//Aquí agrego dentro de la variable contendio de cada elemento <li>
		let contenido = document.createTextNode = listadoTareas[i];
		//Aquí le otorgo atributos a mi elemento <a>
		//Aquí le estoy agregando el atributo href junto con el valor que se va a llamar
		miA.setAttribute('href','https://www.digitalhouse.com');
		//Aquí le agrego el atributo destino, que representa en donde se abrira la paǵina, en este caso en una nueva página
		miA.setAttribute('target','_blank')
		//Aquí le agrego el elemento <a> su contenido 
		miA.append(contenido);
		//Aquí agrego el contenido del elemento <a> a mi elemento <li>
		miLi.append(miA);
		//miLi.innerHTML = listadoTareas[i];
		
		//Esto lo hago para verificar en consola que tiene mi elemento <a>  
		console.log(miA);
		//Aquí finalmente agrego a mi elemento <ul> el elemento <li> creado con su respectivo contenido del enlace, elemento <a>
		miUl.append(miLi);
	}
	//Aquí agrego de forma diámica un contenenido a mi documento , noten que lo hago sobre el body previamente capturado
	body.innerHTML = "<h1>Lista de "+cantTareas+" tareas creadas dinamicamente con JS "+"</h1> ";
	//Aquí agrego a mi documento el contenido de la lista creada, el cual constituye nuestro elemento <ul>
	body.append(miUl);

	/*Ahora bien, después del proceso de solicitud de tareas, se debe setear un timer que permita preguntarle al usuario por medio de un alerta, tras 5 segundos de inactividad, "Ey ¿Hermano querido estás ahí?". Tener en cuenta que si el usuario está activo dentro del documento dicho timer se debe limpiar.*/

	//Declaro una variable en cero, lo hago sólo para mantener el control de los conteos de los intervalos de los tiempos, el cual va a controlar que sean cinco segundos
	
	let contador = 0;
	let tiempo = setInterval(intervalo,1000);
	//Notese que cuando usamos el setInterval, colocamos una función que se va a llamar luego de haber transcurrido un segundo
	function intervalo(){
		//Aquí voy contando los segundos
		contador++;
		//Una vez que los segundos llegan a 5, muestro al usuario un mensaje 
		if(contador === 5){
			alert("Te encuentras por estos lados!");
		}
	}	
	//Aquí controlo si el usuario se encuentra activo en mi página, es decir está haciendo algo o viendo algo, aquí es donde hago que si el usuario esta trabajando en la página entonces mi varfiable contador de segundos la hago igual a cero
	window.onmousemove = function(){
		clearInterval(tiempo);
		contador = 0;
		tiempo = setInterval(intervalo,1000);
	}

	
};
