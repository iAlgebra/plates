var xhr = new XMLHttpRequest();
xhr.open('GET', 'patentes.json');
xhr.send(null); // starts to execute the request.

xhr.onreadystatechange = function() {
  var CLIENT_DONE = 4; // readyState 4 means the request is done.
  var SERVER_OK = 200; // status 200 is a successful return.
  if (xhr.readyState === CLIENT_DONE) {
    if (xhr.status === SERVER_OK) {
      // response is an array of books.
      patentes = JSON.parse(xhr.responseText);
      mostrarPatentes();
    }
  }
};

var $agregar = document.getElementById('agregar');
var $borrar = document.getElementById('borrar');
var $editar = document.getElementById('editar');

var patentes = [];

function mostrarPatentes() {
  //encontrar al padre de cada option (el select)
  var $platesList = document.querySelector('#plates-list');
  //limpiar el select
  $platesList.innerHTML = '';
  // ir por el array de patentes, y por cada elemento que encuentre:
  // crear un option
  patentes.forEach(function(patente) {
    var $option = document.createElement('option');
    //agregarle como inner text ese elemento
    $option.innerText = patente;
    //agregarselo como hijo a select
    $platesList.appendChild($option);
  });
}

$agregar.onclick = function() {
  var patente = prompt('Que patente queres agregar');
  if (patente === null) {
    return;
  }
  //mientras que este vacio, alertar mensaje de error y volver a preguntar
  while (patente === '') {
    alert('No has ingresado ningun valor');
    patente = prompt('Que patente queres agregar');
  }
  //chequear si es un valor null no agregarlo
  if (patente === null) {
    return;
  }
  patentes.push(patente);
  mostrarPatentes();
};

$borrar.onclick = function() {
  var indice = prompt('Que indice de patente queres borrar?');

  //indice a borrar tiene que ser entre 0 y un num menor al length del array
  while (!(indice >= 0 && indice < patentes.length)) {
    alert('Ingresa un indice valido');
    var indice = prompt('Que indice de patente queres editar?');
  }

  while (indice === '') {
    alert('Valor ingresado no valido');
    var indice = prompt('Que indice de patente queres borrar?');
  }
  // si en null es que el usuario eligio cancelar
  if (indice === null) {
    return;
  }

  if (indice < patentes.length && indice >= 0) {
    patentes.splice(indice, 1);
  }

  mostrarPatentes();
};

$editar.onclick = function() {
  //que indice queres editar
  var indiceAEditar = prompt('Que indice de patente queres editar?');

  //indice a editar tiene que ser entre 0 y un num menor al length del array
  while (!(indiceAEditar >= 0 && indiceAEditar < patentes.length)) {
    alert('Ingresa un indice valido');
    var indiceAEditar = prompt('Que indice de patente queres editar?');
  }

  while (indiceAEditar === '') {
    alert('Valor ingresado no valido');
    var indiceAEditar = prompt('Que indice de patente queres editar?');
  }

  if (indiceAEditar === null) {
    return;
  }
  //preguntar nuevo valor, mostrandole la patente actual
  var patenteNueva = prompt('Ingese nueva patente', patentes[indiceAEditar]);

  while (patenteNueva === '') {
    alert('Valor ingresado no valido');
    var patenteNueva = prompt('Ingese nueva patente', patentes[indiceAEditar]);
  }

  if (patenteNueva === null) {
    return;
  }
  //cambiar valor viejo por el nuevo
  patentes[indiceAEditar] = patenteNueva;
  //mostrarlo al ausuario
  mostrarPatentes();
};
