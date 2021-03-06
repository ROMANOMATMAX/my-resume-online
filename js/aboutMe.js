
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
const navElements = document.getElementsByClassName('nav-link');
const topOpcion1 = document.getElementById('top-opcion-1');
const topOpcion2 = document.getElementById('top-opcion-2');
const topOpcion3 = document.getElementById('top-opcion-3');
const topOpcion4 = document.getElementById('top-opcion-4');
const topOpcion5 = document.getElementById('top-opcion-5');
const header = document.getElementById('header-tag');
const menu = document.getElementById('menu');
const toMenu = document.getElementById('to-menu');
const nav = document.getElementById('nav-list');
const imgPerfil = document.getElementById('dev-img');
const btnContacto = document.getElementById('contact-btn');
const btnUp = document.getElementById('up-btn');
const modificandoElementoSeleccionado = (e) => {
    console.log(e.target.id);
    if(!window.matchMedia("(max-width: 768px)").matches) {//para pantallas mayores a 768
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
    }else{
        switch(e.target.id) {
            case 'ed-btn-1':
                //Remuevo la clase actual de deseleccionado al boton 1
                btnEducation1.classList.remove("deselected-btn-education-sm")
                //Le agrego la clase de seleccionado al boton 1
                btnEducation1.classList.add("selected-btn-education-sm")
                //Remuevo el seleccionado y Coloco la clase deseleccionado a los boton 2 y al 3
                btnEducation2.classList.remove("selected-btn-education-sm")
                btnEducation2.classList.add("deselected-btn-education-sm")
                btnEducation3.classList.remove("selected-btn-education-sm")
                btnEducation3.classList.add("deselected-btn-education-sm")
                //Debo mostrar el primer div de education description-sm
                changeWhatDataIsShown(1);
                break;
            case 'ed-btn-2':
                //Remuevo la clase actual de deseleccionado al boton 2
                btnEducation2.classList.remove("deselected-btn-education-sm")
                //Le agrego la clase de seleccionado al boton 2
                btnEducation2.classList.add("selected-btn-education-sm")
                //Remuevo el seleccionado y Coloco la clase deseleccionado a los boton 1 y al 3
                btnEducation3.classList.remove("selected-btn-education-sm")
                btnEducation3.classList.add("deselected-btn-education-sm")
                btnEducation1.classList.remove("selected-btn-education-sm")
                btnEducation1.classList.add("deselected-btn-education-sm")
                changeWhatDataIsShown(2);
                break;
            case 'ed-btn-3':
                //Remuevo la clase actual de deseleccionado al boton 3
                btnEducation3.classList.remove("deselected-btn-education-sm")
                //Le agrego la clase de seleccionado al boton 3
                btnEducation3.classList.add("selected-btn-education-sm")
                //Remuevo el seleccionado y Coloco la clase deseleccionado a los boton 1 y al 2
                btnEducation2.classList.remove("selected-btn-education-sm")
                btnEducation2.classList.add("deselected-btn-education-sm")
                btnEducation1.classList.remove("selected-btn-education-sm")
                btnEducation1.classList.add("deselected-btn-education-sm")
                changeWhatDataIsShown(3);
                break;
        }
    }
}

const modificandoElementoSeleccionadoExperience = (e) => {
    console.log(e.target.id);
    if(!window.matchMedia("(max-width: 768px)").matches) {//para pantallas mayores a 768
        switch(e.target.id) {
            case 'exp-btn-1':
                //Remuevo la clase actual de deseleccionado al boton 1
                btnExperience1.classList.remove("deselected-btn-education")
                //Le agrego la clase de seleccionado al boton 1
                btnExperience1.classList.add("selected-btn-education")
                //Remuevo el seleccionado y Coloco la clase deseleccionado a los boton 2 y al 3
                btnExperience2.classList.remove("selected-btn-education")
                btnExperience2.classList.add("deselected-btn-education")
                //Debo mostrar el primer div de education description
                changeWhatDataIsShownAsExperience(1);
                break;
            case 'exp-btn-2':
                //Remuevo la clase actual de deseleccionado al boton 2
                btnExperience2.classList.remove("deselected-btn-education")
                //Le agrego la clase de seleccionado al boton 2
                btnExperience2.classList.add("selected-btn-education")
                //Remuevo el seleccionado y Coloco la clase deseleccionado a los boton 1 y al 3
                btnExperience1.classList.remove("selected-btn-education")
                btnExperience1.classList.add("deselected-btn-education")
                changeWhatDataIsShownAsExperience(2);
                break;
        }
    }else{
        switch(e.target.id) {
            case 'exp-btn-1':
                //Remuevo la clase actual de deseleccionado al boton 1
                btnExperience1.classList.remove("deselected-btn-education-sm")
                //Le agrego la clase de seleccionado al boton 1
                btnExperience1.classList.add("selected-btn-education-sm")
                //Remuevo el seleccionado y Coloco la clase deseleccionado a los boton 2 y al 3
                btnExperience2.classList.remove("selected-btn-education-sm")
                btnExperience2.classList.add("deselected-btn-education-sm")
                //Debo mostrar el primer div de education description
                changeWhatDataIsShownAsExperience(1);
                break;
            case 'exp-btn-2':
                //Remuevo la clase actual de deseleccionado al boton 2
                btnExperience2.classList.remove("deselected-btn-education-sm")
                //Le agrego la clase de seleccionado al boton 2
                btnExperience2.classList.add("selected-btn-education-sm")
                //Remuevo el seleccionado y Coloco la clase deseleccionado a los boton 1 y al 3
                btnExperience1.classList.remove("selected-btn-education-sm")
                btnExperience1.classList.add("deselected-btn-education-sm")
                changeWhatDataIsShownAsExperience(2);
                break;
        }
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
//Cambiar algunos estilos de acuerdo al tama??o de la pantalla
function cambiarEstilosSegunPantalla() {
    const skillSection = document.getElementById('skills-section');
    if(!window.matchMedia("(max-width: 768px)").matches) {//Si la pantalla es mayor a 768
        btnEducation1.classList.add('selected-btn-education')
        btnExperience1.classList.add('selected-btn-education')
       //cambio el estilo a la seccion skills
       skillSection.classList.remove('seccion-animada-y')
       skillSection.classList.add('card-animation')
    }else {//Si es menor o igual
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
                }
            })
        topOpcion1.addEventListener('click', () => {menu.click()});
        topOpcion2.addEventListener('click', () => {menu.click()});
        topOpcion3.addEventListener('click', () => {menu.click()});
        topOpcion4.addEventListener('click', () => {menu.click()});
        topOpcion5.addEventListener('click', () => {menu.click()});
        console.log('detecto pantalla chica');
        btnEducation1.classList.add('selected-btn-education-sm')
        btnExperience1.classList.add('selected-btn-education-sm')
    }
}

cambiarEstilosSegunPantalla();

//JS para la animaci??n de secciones apenas aparecen en el viewport
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
  if(imgPerfil.getBoundingClientRect().top < window.innerHeight) {
      imgPerfil.classList.add('animacion-foto-perfil');
  }
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
  if(!window.matchMedia("(max-width: 768px)").matches) {
    arryBar.forEach(bar => {
        if(bar.getBoundingClientRect().top < window.innerHeight){
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
}
})

var lastScrollTop = 0;
//Funcion debounce
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
};
//Funcion que procesa el scroll
const scrollingDirectionDetect = () => { // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop){
       // downscroll code
       console.log('Hide the header');
       header.classList.remove('mostrar-header')
       header.classList.add('ocultar-header')
    } else {
       // upscroll code
       console.log('show Header');
       header.classList.remove('ocultar-header')
       header.classList.add('mostrar-header')
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
 }
 //Botton hamburguesa
 let menuClickReminder = false;
const mostrarMenu = () => {
    console.log("Apretaste el menu");
    //modificamos de true a false o de false a true
    menuClickReminder = !menuClickReminder;
    //tenes que mostrar el logo de cerrar menu
    if(menuClickReminder){//Muestro el logo de cerrar menu
        menu.setAttribute('class', 'fas fa-times');
        //Mostrar el nav y modifica estilo
        nav.setAttribute('class', 'd-block nav justify-content-end align-items-center nav-styles-sm')
    }else{//Muestro el logo de abrir menu
        menu.setAttribute('class', 'fas fa-bars');
        nav.setAttribute('class', 'no-mostrar')
    }
}

const clickContactar = () => {
    console.log("hello world");
}
const menuOcultoBajo = document.getElementById('menu-oculto');
let recuerdaBoton = false;
const mostrarMenuDesdeAbajo = () => {
    const bottomOpcion1 = document.getElementById('bottom-option-1');
    const bottomOpcion2 = document.getElementById('bottom-option-2');
    const bottomOpcion3 = document.getElementById('bottom-option-3');
    const bottomOpcion4 = document.getElementById('bottom-option-4');
    const bottomOpcion5 = document.getElementById('bottom-option-5');
    bottomOpcion1.addEventListener('click', () => {
        const menuBottom = document.getElementById('menu-bottom-dos');
        menuBottom.click();
    })
    bottomOpcion2.addEventListener('click', () => {
        const menuBottom = document.getElementById('menu-bottom-dos');
        menuBottom.click();
    })
    bottomOpcion3.addEventListener('click', () => {
        const menuBottom = document.getElementById('menu-bottom-dos');
        menuBottom.click();
    })
    bottomOpcion4.addEventListener('click', () => {
        const menuBottom = document.getElementById('menu-bottom-dos');
        menuBottom.click();
    })
    bottomOpcion5.addEventListener('click', () => {
        const menuBottom = document.getElementById('menu-bottom-dos');
        menuBottom.click();
    })
    const menuBottom = document.getElementById('menu-bottom-dos');
    console.log(menuBottom);
    menuBottom.addEventListener('click', ()=>{
        console.log("cerrando");
        menuOcultoBajo.classList.remove('hide-bottom-menu');
        menuOcultoBajo.classList.add('d-none')
        recuerdaBoton = false;
    })
    console.log("mostrar el menu desde abajo");
    if(!recuerdaBoton){//No esta presionado el boton
        menuOcultoBajo.classList.remove('d-none');
        menuOcultoBajo.classList.add('hide-bottom-menu')
        recuerdaBoton = !recuerdaBoton;
        // bottomOpcion1.addEventListener('click', menuBottom.click());
    }
}
toMenu.addEventListener('click', mostrarMenuDesdeAbajo)
menu.addEventListener('click', mostrarMenu)
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
if(!window.matchMedia("(max-width: 768px)").matches) {//para pantallas mayores a 768    
    window.addEventListener("scroll", debounce(scrollingDirectionDetect, 250));
}

const formularioContactoSubmit = (event)  => {
    event.preventDefault();
    const msjError = document.getElementById('msj-submit');
    console.log("estas enviando el correo");
    msjError.innerHTML="Gracias por tu mensaje!!"
    msjError.setAttribute('class', 'alert alert-success');
        setTimeout(()=>{
            msjError.setAttribute('class', 'd-none')
            const btnClose = document.getElementById('close-form-contact');
    btnClose.click();
        }, 1000);
}


btnEducation1.addEventListener('click', modificandoElementoSeleccionado);
btnEducation2.addEventListener('click', modificandoElementoSeleccionado);
btnEducation3.addEventListener('click', modificandoElementoSeleccionado);

btnExperience1.addEventListener('click', modificandoElementoSeleccionadoExperience)
btnExperience2.addEventListener('click', modificandoElementoSeleccionadoExperience)

btnContacto.addEventListener('click', clickContactar)

btnUp.addEventListener('click', ()=>{
    console.log("hellos world");
    window.location.hash = "first-section";
})

