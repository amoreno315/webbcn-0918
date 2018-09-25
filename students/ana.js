'use strict'

function main(){


var button= document.createElement('button');
button.innerText = 'Ocultar'

var section = document.querySelector('.profile');
var p = document.querySelector('p.profile-info');
section.insertBefore(button,p);



button.addEventListener('click', function(e){
  p.classList.toggle('hidden');
  //e.currentTarget.innerText = 'Mostrar';
  if (p.classList.contains('hidden')){
    e.currentTarget.innerText = "Mostrar";

  }else {e.currentTarget.innerText = "Ocultar"}

})
}
window.addEventListener('load', main);


