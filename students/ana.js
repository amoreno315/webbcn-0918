'use strict'

function main(){


var button= document.createElement('button');
button.innerText = 'Ocultar'

var header = document.querySelector('header');
header.appendChild(button);

var h1 = document.querySelector ('h1');


button.addEventListener('click', function(e){
  h1.classList.toggle('hidden');
  e.currentTarget.innerText = 'Mostrar';

})
}
window.addEventListener('load', main);


