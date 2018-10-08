'use strict';

function main (){

  //Hide Sections
  var hideButtons = document.querySelectorAll(".hide-button");

  var hideSection = function (event) {
    event.currentTarget.parentNode.parentNode.children[1].classList.toggle("hidden");
    if (event.currentTarget.parentNode.parentNode.children[1].classList.contains("hidden")){
      event.currentTarget.innerText = "Show section";
    } else {
      event.currentTarget.innerText = "Hide section";
    }
  }

  hideButtons.forEach(function(hideButton){
    hideButton.addEventListener('click', hideSection);
  });

  //Move Picture
  var profilePicture = document.querySelector(".profile-picture");

  var motionPicture = function (event) {
    profilePicture.classList.toggle("animation-picture");
  }

  profilePicture.addEventListener('mouseover', motionPicture);
  profilePicture.addEventListener('mouseleave', motionPicture);

  // Search Engine
  var input = document.querySelector(".input-student input");
  var searchResultsElement = document.querySelector(".search-results");
  searchResultsElement.innerHTML = [];

  input.addEventListener('click', function (event) {
    event.stopPropagation();
  });

  document.body.addEventListener('click', function () {
    searchResultsElement.innerHTML = "";
  });

  document.body.addEventListener('keyup', function (event) {
    if (event.key === 'Escape'){
      searchResultsElement.innerHTML = "";
      return;
    }
  });

  var findStudents = function (searchTerm) {
    var results = [];
    if (searchTerm){
      results = students.filter(function (student){
        var studentName = student.name.toLowerCase();
        if (studentName.indexOf(searchTerm) !== -1){
          return true;
        }
      });
    }
    return results;
  }

  var displayResults = function (results) {
    var searchResultsListElement = document.createElement('ul');
    searchResultsElement.innerHTML = [];
    results.forEach(function (result){
      var resultLink = document.createElement("a");
      resultLink.innerText = result.name;
      resultLink.setAttribute("href", "../" + result.url);
      var resultListItem = document.createElement("li");
      resultListItem.appendChild(resultLink);
      searchResultsListElement.appendChild(resultListItem);
    })
    searchResultsElement.appendChild(searchResultsListElement);
  } 
  
  var handleKeyUp = function (event) {
    var searchTerm = input.value.toLowerCase();
    var results = findStudents(searchTerm);
    displayResults(results);
  }
  
  input.addEventListener('keyup', handleKeyUp);

  //Game - Password
  var secondsCount = 20;
  var timeLeft;
  var myPassword = 'password';
  var playButton = document.querySelector(".password-play-button");
  var gameContainer = document.querySelector(".game-container");
  var countdown = document.createElement('p');
  countdown.innerText = secondsCount;
  var userGuess = document.createElement('input');
  userGuess.setAttribute("placeholder", "Escribe una contraseña")
  userGuess.setAttribute("type", "password")

  var activatePasswordGame = function (event) {
    event.stopPropagation();
    timeLeft = secondsCount;
    function checkAnswer (event) {
      event.stopPropagation();
      if (event.key === "Enter"){
        if (userGuess.value === myPassword){
          countdown.classList.remove("timeup");
          countdown.classList.add("win");
          countdown.innerText = "CORRECT!!!";
          clearInterval(intervalId);
          setTimeout(endGame, 2000);
        }
      }
    }
    userGuess.addEventListener('keyup', checkAnswer);
    playButton.removeEventListener("click",activatePasswordGame)
    gameContainer.appendChild(countdown);
    gameContainer.appendChild(userGuess);
    var intervalId = setInterval(function (){
      countdown.innerText = timeLeft;
      if(timeLeft === 5){
        countdown.classList.add("timeup");
      }
      if(!timeLeft){
        countdown.innerText = "GAME OVER";
        clearInterval(intervalId);
        setTimeout(endGame, 2000);
      }
      timeLeft--;
    }, 1000);
  }
  
  function endGame(){
    countdown.classList.remove("timeup");
    countdown.classList.remove("win");
    playButton.addEventListener('click', activatePasswordGame);
    userGuess.value = '';
    countdown.innerText = secondsCount;
    countdown.remove();
    userGuess.remove();
  }

  playButton.addEventListener('click', activatePasswordGame);


}

window.addEventListener("load", main);
