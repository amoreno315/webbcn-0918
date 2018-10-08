function main() {

var section = document.querySelector('.informacion-personal');
var button = document.querySelector('.toggle-info');
var section2 = document.querySelector('.experiments');
var button2 = document.querySelector('.toggle-experiments');

function handleToggleSection(e) {
  section.classList.toggle('oculto');
  if (section.classList.contains('oculto')){
    e.currentTarget.innerText = 'Show header';
  } else {
    e.currentTarget.innerText = 'Hide header';
  }
}

function handleToggleSection2(e) {
  section2.classList.toggle('oculto');
  if (section2.classList.contains('oculto')){
    e.currentTarget.innerText = 'Show header';
  } else {
    e.currentTarget.innerText = 'Hide header';
  }
}

button.addEventListener('click', handleToggleSection);
button2.addEventListener('click', handleToggleSection2);

}

window.addEventListener('load', main);





