var $agregar = document.getElementById('agregar');
var $borrar = document.getElementById('borrar');
var $editar = document.getElementById('editar');
var $textArea = document.getElementById('text-area');

var patentes = [];

function mostrarPatentes() {
  $textArea.value = patentes.toString();
}

$agregar.onclick = function() {
  var patente = prompt('Que patente queres agregar');
  patentes.push(patente);
  mostrarPatentes();
};

$borrar.onclick = function() {
  var indice = prompt('Que indice de patente queres borrar?');
  patentes.splice(indice, 1);
  mostrarPatentes();
};

$editar.onclick = function() {
  //que indice queres editar
  var indiceAEditar = prompt('Que indice de patente queres editar?');
  //preguntar nuevo valor, mostrandole la patente actual
  var patenteNueva = prompt('Ingese nueva patente', patentes[indiceAEditar]);
  //cambiar valor viejo por el nuevo
  patentes[indiceAEditar] = patenteNueva;
  //mostrarlo al ausuario
  mostrarPatentes();
};

//agregar numero de patentes a una lista y poder verlas y editarlas despues.
// tambien poder arrepentirse de agregarla
