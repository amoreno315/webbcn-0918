'use strict';
function main() {

  var linkSection = document.querySelector('div.link-section');
  var about = document.querySelector('section.about');
  var experiments = document.querySelector('section.experiments');
  var firstButton = document.createElement('button');
  var secondButton = document.createElement('button');

  firstButton.classList.add('first-button');
  secondButton.classList.add('second-button');

  firstButton.innerText = 'Hide About';
  secondButton.innerText = 'Hide Experiments';

  linkSection.appendChild(firstButton);
  linkSection.appendChild(secondButton);

  function hideFirstSection(element) {
    about.classList.toggle('hidden');
    if (about.classList.contains('hidden')) {
      element.currentTarget.innerText = 'Show About';
    } else {
      element.currentTarget.innerText = 'Hide About';
    }
  }

  function hideSecondSection(element) {
    experiments.classList.toggle('hidden');
    if (experiments.classList.contains('hidden')) {
      element.currentTarget.innerText = 'Show Experiments';
    } else {
      element.currentTarget.innerText = 'Hide Experiments';
    }
  }

  firstButton.addEventListener('click', hideFirstSection);
  secondButton.addEventListener('click', hideSecondSection);


/* ---- searchBar ---- */

var input = document.querySelector('.input-student input');
input.addEventListener('keyup', handleKeyDown);
/* Jag lägger till denna nedan för att det ska gå att klicka i input-boxen utan att eventListener tar bort sökningen. */
input.addEventListener('click', function () {
  event.stopPropagation();
})
var searchResultsElement = document.querySelector('.search-results');

document.body.addEventListener('keyup', function (event) {
  if (event.key === 'Escape') {
    searchResultsElement.innerHTML = '';
  }
});

document.body.addEventListener('click', function () {
  searchResultsElement.innerHTML = '';
  input.value = '';
});

function findStudents (searchTerm) {
  var results = [];
  if (searchTerm) {
    results = students.filter(function (student) {
      var studentName = student.name.toLowerCase();
      if (studentName.indexOf(searchTerm) !== -1) {
        return true;
      }
    });
  }
  return results;
}

function displayResults (results) {
  searchResultsElement.innerHTML = '';
  var searchResultsListElement = document.createElement('ul');
  results.forEach(function(result) {
    var resultLink = document.createElement('a');
    resultLink.innerText = result.name;
    resultLink.setAttribute('href', '../' + result.url);
    var resultListItem = document.createElement('li');
    resultListItem.appendChild(resultLink);
    searchResultsListElement.appendChild(resultListItem);
  })
  searchResultsElement.appendChild(searchResultsListElement);
}

function handleKeyDown () {
  var searchTerm = input.value.toLowerCase();
  var results = findStudents(searchTerm);
  displayResults(results);
}

/* ---- async ---- */

var getLost = document.querySelector('.dont-push-button');
var getBack = document.querySelector('.push-button');
var getBackText = document.querySelector('.get-back-text');
var main = document.querySelector('main');
var timerId;

getLost.addEventListener('click', function () {
  main.classList.add('hidden');
  getBack.classList.remove('hidden');
  getBackText.classList.remove('hidden');
  timerId = setTimeout(function () {
    main.classList.remove('hidden');
    getBack.classList.add('hidden');
    getBackText.classList.add('hidden');
  }, 3000);
});

getBack.addEventListener('click', function () {
  main.classList.remove('hidden');
  getBack.classList.add('hidden');
  getBackText.classList.add('hidden');
  clearTimeout(timerId);
});



}
window.addEventListener('load', main);


// "https://healthy-websites.com/design-53926.html"