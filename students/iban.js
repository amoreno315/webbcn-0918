"use strict";

function main() {

  var counterButton = document.querySelector('.counter-button');
  counterButton.addEventListener('click', activateCounter);
  var final = document.querySelector('.final-message');
  var body = document.querySelector('body');

  function activateCounter(){
    var n = 5;
    var counter = document.querySelector('.counter');
  
    var intervalId = setInterval(function(){
      counter.innerText = n;
      console.log(counter);
      n--;
      if(n === 0){
        final.innerText = 'Hasta luego Lucas!';
      }
      if(n === -1){
        clearInterval(intervalId);
        eraseBody();
      }
    },1000);
  }


function eraseBody(){
  
  body.parentNode.removeChild(body);
};
  
//   function counterGoesToZero() {
//     window.clearTimeout(timeoutID);
//   }

 

// function delayedAlert() {
//   timeoutID = window.setTimeout(slowAlert, 2000);
// }

// function decreaseCounter() {
//   alert("That was really slow!");
// }

// function clearAlert() {
//   window.clearTimeout(timeoutID);
// }



  //seleccionar elementos
  //     var one = document.querySelector('.primary-button');
  //     var dos = document.querySelector('.second-button');
  //     var sectionIntroduce = document.querySelector('.introduce');
  //     var sectionExperimentos = document.querySelector('.experiments');
  //     var body  = document.querySelector('body');
  //    var magicButton = document.querySelector('.magic-button');

  //     one.addEventListener('click', function(e){
  //         sectionIntroduce.classList.toggle('hidden');
  //         if(sectionIntroduce.classList.contains('hidden')){
  //             e.currentTarget.innerText = 'Mostrar sección presentación';
  //         } else{
  //             e.currentTarget.innerText = 'Esconder sección presentación';
  //         }
  //     });

  //     dos.addEventListener('click', function(e){
  //         sectionExperimentos.classList.toggle('hidden');
  //         if(sectionExperimentos.classList.contains('hidden')){
  //             e.currentTarget.innerText = 'Mostrar Experimentos';
  //         } else{
  //             e.currentTarget.innerText = 'Esconder Experimentos';
  //         }
  //     });

  //     magicButton.addEventListener('click', function(e){
  //         var p = document.createElement('p');
  //         p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  //         body.appendChild(p);
  //     })
  var input = document.querySelector(".input-student input");
  var searchResultElement = document.querySelector(".search-results");
  input.addEventListener("keyup", handleKeyUp);
  input.addEventListener('click', function(event){
      event.stopPropagation();
  });

  document.body.addEventListener('keyup', function(){
    if(event.key === 'Escape'){
        searchResultElement.innerHTML = '';
    }
  });

  document.body.addEventListener('click', function(){
        searchResultElement.innerHTML = '';
  });

  function findStudents(searchTerm) {
    var results = [];
    if (searchTerm) {
      results = students.filter(function(student) {
        var studentName = student.name.toLowerCase();
        if (studentName.indexOf(searchTerm) !== -1) {
          return true;
        }
      });
    }
    return results;
  }

  function displayResults(results) {
    searchResultElement.innerHTML = '';
    var searchResultListElement = document.createElement("ul");
    results.forEach(function(result) {
      var resultLink = document.createElement("a");
      resultLink.innerText = result.name;
      resultLink.setAttribute("href", "../" + result.url);
      var resultListItem = document.createElement("li");
      resultListItem.appendChild(resultLink);
      searchResultListElement.appendChild(resultListItem);
    });
    searchResultElement.appendChild(searchResultListElement);
  }

  function handleKeyUp() {
    var searchTerm = input.value.toLowerCase();
    var results = findStudents(searchTerm);
    displayResults(results);
  }
}

window.addEventListener("load", main);
