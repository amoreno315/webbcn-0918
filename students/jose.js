function main(){
  var li1= document.querySelector(".esconderInt");
  //var li2= document.querySelector(".btnder");
  var sectionizq= document.querySelectorAll(".section-intereses article") 
  li1.addEventListener('click', function(){
    sectionizq.forEach(function(section){
    section.classList.toggle("hidden");
    if(section.classList.contains('hidden')){
      li1.innerText = "Muestra la sección";
    } else{
        li1.innerText = "Esconde la sección"; 
      }
    });
  })
  //var sectionder= document.querySelector(".experimentos");

  // li2.addEventListener('click', function(){
  //   sectionder.classList.toggle("hidden");
  //   if(sectionder.classList.contains('hidden')){
  //     li2.innerText = "Muestra la sección";
  //   } else{
  //       li2.innerText = "Esconde la sección"; 
  //     }
  //});
      //-----------------------------------------------------------SEARCH--------------------------------------------------
document.body.addEventListener('keyup',function (event){//cuadno pulsas escape te quita la lista
  if (event.key === 'Escape'){
    searchResultsElement.innerHTML="";
    return;
  }
});
document.body.addEventListener('click',function (event){//cuadno pulsas escape te quita la lista
    searchResultsElement.innerHTML="";
});
var searchResultsElement = document.querySelector(".search-results");


  function findStudents(searchTerm){
    var results= [];
    if(searchTerm){
       results= students.filter(function(student){
        var studentName = student.name.toLowerCase();
        if(studentName.indexOf(searchTerm) !== -1){
          return true; 
        }
      })
    }
      return results;
  }
  var handleKeyUp = function(event){
    var searchTerm = input.value.toLowerCase();
    var results = findStudents(searchTerm);
    displayResults(results);
  }

  function displayResults(results){
      searchResultsElement.innerHTML = "";
      var searchResultsListElement = document.createElement('ul');
      results.forEach(function(result){
        var resultLink = document.createElement('a');
        resultLink.innerText= result.name;//texto del link
        resultLink.setAttribute('href','../'+result.url);//modidificamos con setAttribute un atributo de html como href con la nueva info
        var resultListItem = document.createElement('li');
        resultListItem.appendChild(resultLink);
        searchResultsListElement.appendChild(resultListItem);//creamos las vinculaciones de padre/hijo- por eso als creamos de menos a más
      })
      searchResultsElement.appendChild(searchResultsListElement);
  }
    var input =document.querySelector('.input-student input')
    input.addEventListener('keyup', handleKeyUp)
    input.addEventListener('click',function(event){
      event.stopPropagation();
    });

    //SCRIPT PARA EL TIMEOUT
    var cuentaAtras= 10;
    var buttonBomb= document.querySelector("#playBomb");
    var todo = document.querySelectorAll("body");    
    var bomb=function bomb(){
      var intervalID = setInterval( function (){
      buttonBomb.innerText =cuentaAtras;
      cuentaAtras --;
      buttonBomb.innerText =cuentaAtras;
      // ANTIBOMBA
    var foto = document.querySelector(".foto-perfil");
    var antibomb = function(){
      clearInterval(intervalID);
    }
    foto.addEventListener('click',antibomb);
    //--------------------
      if(cuentaAtras === 5){
        buttonBomb.classList.add("color-red");
        var pista = document.createElement('p');
        pista.innerText = "Trick: My name is Aigor, NOT Igor!";
        var header = document.querySelector(".playground");
        header.appendChild(pista);
      }
      if (cuentaAtras < 0){
        window.location = "about:blank";
      }
    }, 1000)
    }
    buttonBomb.addEventListener('click', bomb);

    
}
window.addEventListener('load',main)

