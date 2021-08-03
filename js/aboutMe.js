
const btnEducation1 = document.getElementById('ed-btn-1');
const btnEducation2 = document.getElementById('ed-btn-2');
const btnEducation3 = document.getElementById('ed-btn-3');
const btnExperience1 = document.getElementById('exp-btn-1');
const btnExperience2 = document.getElementById('exp-btn-2');
const educationData1 = document.getElementById('education-data-1');
const educationData2 = document.getElementById('education-data-2');
const educationData3 = document.getElementById('education-data-3');
const experienceData1 = document.getElementById('experience-data-1');
const experienceData2 = document.getElementById('experience-data-2');

const modificandoElementoSeleccionado = (e) => {
    console.log(e.target.id);
    switch(e.target.id) {
        case 'ed-btn-1':
            //Remuevo la clase actual de deseleccionado al boton 1
            btnEducation1.classList.remove("deselected-btn-education")
            //Le agrego la clase de seleccionado al boton 1
            btnEducation1.classList.add("selected-btn-education")
            //Remuevo el seleccionado y Coloco la clase deseleccionado a los boton 2 y al 3
            btnEducation2.classList.remove("selected-btn-education")
            btnEducation2.classList.add("deselected-btn-education")
            btnEducation3.classList.remove("selected-btn-education")
            btnEducation3.classList.add("deselected-btn-education")
            //Debo mostrar el primer div de education description
            changeWhatDataIsShown(1);
            break;
        case 'ed-btn-2':
            //Remuevo la clase actual de deseleccionado al boton 2
            btnEducation2.classList.remove("deselected-btn-education")
            //Le agrego la clase de seleccionado al boton 2
            btnEducation2.classList.add("selected-btn-education")
            //Remuevo el seleccionado y Coloco la clase deseleccionado a los boton 1 y al 3
            btnEducation3.classList.remove("selected-btn-education")
            btnEducation3.classList.add("deselected-btn-education")
            btnEducation1.classList.remove("selected-btn-education")
            btnEducation1.classList.add("deselected-btn-education")
            changeWhatDataIsShown(2);
            break;
        case 'ed-btn-3':
            //Remuevo la clase actual de deseleccionado al boton 3
            btnEducation3.classList.remove("deselected-btn-education")
            //Le agrego la clase de seleccionado al boton 3
            btnEducation3.classList.add("selected-btn-education")
            //Remuevo el seleccionado y Coloco la clase deseleccionado a los boton 1 y al 2
            btnEducation2.classList.remove("selected-btn-education")
            btnEducation2.classList.add("deselected-btn-education")
            btnEducation1.classList.remove("selected-btn-education")
            btnEducation1.classList.add("deselected-btn-education")
            changeWhatDataIsShown(3);
            break;
    }
}

const modificandoElementoSeleccionadoExperience = (e) => {
    console.log(e.target.id);
    switch(e.target.id) {
        case 'exp-btn-1':
            //Remuevo la clase actual de deseleccionado al boton 1
            btnExperience1.classList.remove("deselected-btn-education")
            //Le agrego la clase de seleccionado al boton 1
            btnExperience1.classList.add("selected-btn-education")
            //Remuevo el seleccionado y Coloco la clase deseleccionado a los boton 2 y al 3
            btnExperience2.classList.remove("selected-btn-education")
            btnExperience2.classList.add("deselected-btn-education")
            // btnExperience3.classList.remove("selected-btn-education")
            // btnExperience3.classList.add("deselected-btn-education")
            //Debo mostrar el primer div de education description
            changeWhatDataIsShownAsExperience(1);
            break;
        case 'exp-btn-2':
            //Remuevo la clase actual de deseleccionado al boton 2
            btnExperience2.classList.remove("deselected-btn-education")
            //Le agrego la clase de seleccionado al boton 2
            btnExperience2.classList.add("selected-btn-education")
            //Remuevo el seleccionado y Coloco la clase deseleccionado a los boton 1 y al 3
            // btnExperience3.classList.remove("selected-btn-education")
            // btnExperience3.classList.add("deselected-btn-education")
            btnExperience1.classList.remove("selected-btn-education")
            btnExperience1.classList.add("deselected-btn-education")
            changeWhatDataIsShownAsExperience(2);
            break;
    }
}

const changeWhatDataIsShown = (position) => {
    switch(position) {
        case 1: 
            educationData1.setAttribute("class", "show-education-information");
            educationData2.setAttribute("class", "hide-education-information");
            educationData3.setAttribute("class", "hide-education-information");
            break;
        case 2: 
            educationData2.setAttribute("class", "show-education-information");
            educationData1.setAttribute("class", "hide-education-information");
            educationData3.setAttribute("class", "hide-education-information");
            break;
        case 3: 
            educationData3.setAttribute("class", "show-education-information");
            educationData2.setAttribute("class", "hide-education-information");
            educationData1.setAttribute("class", "hide-education-information");
            break;
    }
}

const changeWhatDataIsShownAsExperience = (position) => {
    switch(position) {
        case 1: 
            experienceData1.setAttribute("class", "show-education-information");
            experienceData2.setAttribute("class", "hide-education-information");
            break;
        case 2: 
            experienceData2.setAttribute("class", "show-education-information");
            experienceData1.setAttribute("class", "hide-education-information");
            break;
    }
}
//funcion que asigna el efecto de load a las bars
//Cambiar algunos estilos de acuerdo al tamaño de la pantalla
function cambiarEstilosSegunPantalla() {
    const skillSection = document.getElementById('skills-section');
    if(!window.matchMedia("(max-width: 768px)").matches) {//Si la pantalla es mayor a 768
       //cambio el estilo a la seccion skills
       skillSection.classList.remove('seccion-animada-y')
       skillSection.classList.add('card-animation')
       const listOfBars = document.getElementsByClassName('fill-color');
       let arryBar = [...listOfBars];
       arryBar.forEach(bar => {
           switch(bar.id){
            case 'barra-1': bar.classList.add('load-bar-1');break;     
            case 'barra-2': bar.classList.add('load-bar-2');break;
            case 'barra-3': bar.classList.add('load-bar-3');break;
            case 'barra-4': bar.classList.add('load-bar-4');break;
            case 'barra-5': bar.classList.add('load-bar-5');break; 
            case 'barra-6': bar.classList.add('load-bar-6');break;
            case 'barra-7': bar.classList.add('load-bar-7');break;
            case 'barra-8': bar.classList.add('load-bar-8');break;
            case 'barra-9': bar.classList.add('load-bar-9');break;
            default: break;
        }
       })
    }else {//Si es menor o igual
        console.log('detecto pantalla chica');
        skillSection.classList.remove('card-animation')
        skillSection.classList.add('seccion-animada-y')
    }
}

cambiarEstilosSegunPantalla();

//JS para la animación de secciones apenas aparecen en el viewport
const listOfBars = document.getElementsByClassName('fill-color');
let arryBar = [...listOfBars];
console.log(arryBar);
const listOfCardsFromBT = document.getElementsByClassName("seccion-animada-y");
let arryBT = [...listOfCardsFromBT]
const listOfCards = document.getElementsByClassName("seccion-animada-x");
console.log(listOfCards);
let arry = [...listOfCards] 
console.log(arry);
//This actually give you values relative to the top left corner of the browser window
window.addEventListener('scroll', function () {
  // console.log(window.innerHeight);
  // console.log(firstCard.getBoundingClientRect().top);
  arry.forEach(card => {
    if(card.getBoundingClientRect().top < window.innerHeight){
      card.classList.add("card-animation");
    }
  });
  arryBT.forEach(card => {
    if(card.getBoundingClientRect().top < window.innerHeight){
      card.classList.add("card-animation-y");
    }
  });
  arryBar.forEach(bar => {
    if(bar.getBoundingClientRect().top < window.innerHeight){
      console.log(bar.id);
      switch(bar.id){
        case 'barra-1': bar.classList.add('load-bar-1');break;     
        case 'barra-2': bar.classList.add('load-bar-2');break;
        case 'barra-3': bar.classList.add('load-bar-3');break;
        case 'barra-4': bar.classList.add('load-bar-4');break;
        case 'barra-5': bar.classList.add('load-bar-5');break; 
        case 'barra-6': bar.classList.add('load-bar-6');break;
        case 'barra-7': bar.classList.add('load-bar-7');break;
        case 'barra-8': bar.classList.add('load-bar-8');break;
        case 'barra-9': bar.classList.add('load-bar-9');break;
        default: break;
    }
    }
  });
})



btnEducation1.addEventListener('click', modificandoElementoSeleccionado);
btnEducation2.addEventListener('click', modificandoElementoSeleccionado);
btnEducation3.addEventListener('click', modificandoElementoSeleccionado);

btnExperience1.addEventListener('click', modificandoElementoSeleccionadoExperience)
btnExperience2.addEventListener('click', modificandoElementoSeleccionadoExperience)