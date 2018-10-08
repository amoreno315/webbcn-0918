


function main(){
  // Declaración de variables
  var button1 = document.querySelector(".button-1")
  var button2 = document.querySelector(".button-2")
  var section1 = document.querySelector(".perfil")
  var section2 = document.querySelector(".experiments")
  // Declaración de funciones
  function hide1(e){
    section1.classList.toggle("hidden")
    if(section1.classList.contains("hidden")) {
      e.currentTarget.innerText = "Show Profile"
    } else {
      e.currentTarget.innerText = "Hide Profile"
    }
    
  }
  function hide2(e){
    section2.classList.toggle("hidden")
    if(section2.classList.contains("hidden")) {
      e.currentTarget.innerText = "Show Experiments"
    } else {
      e.currentTarget.innerText = "Hide Experiments"
    }
  }
  // Añadir Eventos
  button1.addEventListener("click",hide1)
  button2.addEventListener("click",hide2)
}

window.addEventListener("load",main);