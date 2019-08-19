
  let selectProvincia = document.querySelector('#provincia');
  let selectMunicipio = document.querySelector('#municipio');
  let seleccion = "";


  //selectProvincia.addEventListener('click',cargarProvincias);
  cargarProvincias();
  function cargarProvincias(){
    fetch('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre')
    //.then(respuesta => respuesta.json())
    
    .then(function(respuesta){
      //console.log(respuesta.json());
      return respuesta.json();
    })

    .then(function(dataProvincias){
      //console.log(data);
      selectProvincia.innerHTML = "<option>Seleccionar provincia....</option>"
      for (valor of dataProvincias.provincias){
        let opciones = document.createElement('option');
        opciones.innerHTML = valor.nombre
        opciones.setAttribute('value',valor.id)
        //console.log(opciones);
        selectProvincia.append(opciones)
      }

    })
  }  

  selectProvincia.addEventListener('change',function(){
    //console.log(selectProvincia.selectedIndex);
    seleccion = selectProvincia.options[selectProvincia.selectedIndex].value
    //console.log(seleccion);
    cargarMunicipios(seleccion);

  })

  function cargarMunicipios(seleccion){
    //console.log(seleccion);
    fetch(' https://apis.datos.gob.ar/georef/api/municipios?provincia='+seleccion+'&campos=id,nombre&max=100')
    .then(respuesta => respuesta.json())
    .then(function(dataMunicipio){
      //console.log(dataMunicipio.municipios);

      for(let indice of dataMunicipio.municipios){
        let opcionesMunicipios = document.createElement('option')
        opcionesMunicipios.innerHTML = indice.nombre
        opcionesMunicipios.setAttribute('value',indice.id)
        selectMunicipio.append(opcionesMunicipios)
      }
    })
  }


