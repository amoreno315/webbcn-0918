'use strict'

function main(){

var button= document.createElement('button');
button.innerText = 'Ocultar'

var section = document.querySelector('.about');
var p = document.querySelector('p.profile-info');
section.insertBefore(button,p);

button.addEventListener('click', function(e){
  p.classList.toggle('hidden');
  //e.currentTarget.innerText = 'Mostrar';
  if (p.classList.contains('hidden')){
    e.currentTarget.innerText = "Mostrar";

  }else {e.currentTarget.innerText = "Ocultar"}

});
// --------- Search -------------
// var handelKeyDown = function(){
//   console.log(input.value);
// }
// o despues del evento Keydown, pero hay que declar la funcion
// como function handelKeyDown (){}

var input = document.querySelector('.input-student input');
input.addEventListener('keyup', handelKeyUp);
input.addEventListener('click', function(event){
  event.stopPropagation();
});
var searchResultElement = document.querySelector('.search-results');

document.body.addEventListener('keyup', function(event){
  if (event.key === 'Escape'){
    searchResultElement.innerHTML = '';
    return;
  }
});
document.body.addEventListener('click', function(){
  
    searchResultElement.innerHTML = '';
    return;
  
});


function findStudents(searchTerm){
  var results = [];
  if (searchTerm){

  var results = students.filter(function(student){
    var studentName = student.name.toLowerCase();
    if (studentName.indexOf(searchTerm)!== -1){
      return true;
    }
  })
  }
  return results;
}
function displayResults(results){
  
  searchResultElement.innerHTML = '';
  var searchResultListElement = document.createElement('ul');
  results.forEach(function(result){
    // insertamos los resultados en un ul
    // primero creamos el a (elemento más profundo)
    var resultLink = document.createElement('a');
    //asignamos a 'a' un nombre
    resultLink.innerText = result.name;
    //asignamos a 'a' el atributo href
    resultLink.setAttribute('href', '../' + result.url);
    //creamos el elemnto li
    var resultListItem = document.createElement('li');
    //añadimos el elemnto a como hijo de li
    resultListItem.appendChild(resultLink);
    //añadimos el li a ul
    
    searchResultListElement.appendChild(resultListItem);
  })
  // añade el ul dentro del div
  searchResultElement.appendChild(searchResultListElement);
}
function handelKeyUp(){
  
  var searchTerm = input.value.toLowerCase();
  var results = findStudents(searchTerm);
  displayResults(results);


}

// ---------------- Game TimeOut -----------------
var counter = 30;
var successfulClick = document.querySelector('.container .title');
successfulClick.addEventListener('click', function(){
  clickedStop = true;
});

var clickedStop = false;
var countDown = function(){
  var timeoutId = window.setInterval(function(){

    if (clickedStop) {
      clearInterval(timeoutId);
    } else
    if (counter >= 0) {
      var displayCountdown = document.querySelector('.game .counter-box');
      displayCountdown.innerHTML = counter;
      counter--;
     } 
     
  }, 200);

}

var playButton = document.querySelector('.game .button');
playButton.addEventListener('click', countDown);
}

window.addEventListener('load', main);


