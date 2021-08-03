const btnToMoveSectionUp = document.getElementById('btnMoveSection1');
const btnToMoveSectionDown = document.getElementById('btnMoveSection2');
//Vamos a capturar cada una de las secciones
const section1 = document.getElementById('section-1');
const section2 = document.getElementById('section-2');
const section3 = document.getElementById('section-3');
const imgSection1 = document.getElementById('img-section-1')
const imgSection2 = document.getElementById('img-section-2')
const imgSection3 = document.getElementById('img-section-3')
const btnSection1 = document.getElementById('btn-description-section-1');
const btnSection2 = document.getElementById('btn-description-section-2');
const btnSection3 = document.getElementById('btn-description-section-3');
const numberSection1= document.getElementById('number-section-1');
const numberSection2= document.getElementById('number-section-2');
const numberSection3= document.getElementById('number-section-3');
const cloudImg1 = document.getElementById('img-cloud-section-1');
const cloudImg2 = document.getElementById('img-cloud-section-2');
const cloudImg3 = document.getElementById('img-cloud-section-3');
const cloudImg4 = document.getElementById('img-cloud-section-4');
const cloudImg5 = document.getElementById('img-cloud-section-5');
const nav = document.getElementById('nav-list');
const menu = document.getElementById('menu');
console.log(imgSection1, imgSection2, imgSection3);
let clickAccount = 0;
const moveSectionUp = () => {
    if(clickAccount !== 2){
        btnToMoveSectionDown.setAttribute('class', 'd-block move-btn-scroll-up-down appear-disappear-btn')
        clickAccount+=1;
        if(clickAccount ===2){
            btnToMoveSectionUp.setAttribute('class', 'd-none');
        }
        // console.log(`Clickeaste por ${clickAccount}° vez`);  
        desplazarSeccionesUp(clickAccount) 
    }
}

const moveSectionDown = () => {
    if(clickAccount !== 0){
        btnToMoveSectionUp.setAttribute('class', 'd-block move-btn-scroll-down-up appear-disappear-btn')
        clickAccount-=1;
        if(clickAccount === 0){
            btnToMoveSectionDown.setAttribute('class', 'd-none')
        }
        // console.log(`Clickeaste por ${clickAccount}° vez`);
        desplazarSeccionesDown(clickAccount)
    }
}

const desplazarSeccionesUp = (clickNumber) => {
    switch(clickNumber) {
        case 1: //Debo iterar sobre arrySections y desplazar en 100vh agregando una clase primero borrar toda otra clase
        // console.log("deberia mostrar seccion 2");
        //Deberia desplazar fuera de pantalla la seccion 1 y hacer aparecer la seccion 2
        hideAllClouds();
        hidePortfolioWord();
        modificarContenidoUp('About Me', 'I am a full stack web developer. My first approach to programming was...', '../img/fotoPerfil.png', '02', './aboutMe.html')
        break;
        case 2: //Debo iterar sobre arrySections y desplazar en 200vh agregando una clase primero borrar toda otra clase
        hideAllClouds();
        hidePortfolioWord()
        modificarContenidoUp('Get In Touch', 'romanomatias99@gmail.com', '../img/background1.png', '03', './getInTouch.html')
        break;
        default: break;
    }
}

const desplazarSeccionesDown = (clickNumber) => {
    switch(clickNumber) {
        case 0: //Debo iterar sobre arrySections y desplazar en 100vh agregando una clase primero borrar toda otra clase
        // console.log("deberia mostrar la seccion 1");
        showAllClouds();
        showPortfolioWord();
        modificarContenidoUp('Matias Romano', 'FullStack Web Developer', '../img/moon.svg', '01', './portfolio.html')
        break;
        case 1: //Debo iterar sobre arrySections y desplazar en 200vh agregando una clase primero borrar toda otra clase
        // console.log("deberia mostrar la seccion 2");
        hideAllClouds();
        hidePortfolioWord();
        modificarContenidoUp('About Me', 'I am a full stack web developer. My first approach to programming was...', '../img/fotoPerfil.png', '02', './aboutMe.html')
        break;
        default: break;
    }
}
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

btnToMoveSectionUp.addEventListener('click', moveSectionUp)
btnToMoveSectionDown.addEventListener('click', moveSectionDown)
menu.addEventListener('click', mostrarMenu)


//Event Handler up arrow and down arrow
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        // console.log("up arrow");
        if(clickAccount !== 0){
            btnToMoveSectionUp.setAttribute('class', 'd-block move-btn-scroll-down-up appear-disappear-btn')
            clickAccount-=1;
            if(clickAccount === 0){
                btnToMoveSectionDown.setAttribute('class', 'd-none')
            }
            // console.log(`Clickeaste por ${clickAccount}° vez`);
            desplazarSeccionesDown(clickAccount)
        }
    }
    else if (e.keyCode == '40') {
        if(clickAccount !== 2){
            btnToMoveSectionDown.setAttribute('class', 'd-block move-btn-scroll-up-down appear-disappear-btn')
            clickAccount+=1;
            if(clickAccount ===2){
                btnToMoveSectionUp.setAttribute('class', 'd-none');
            }
            // console.log(`Clickeaste por ${clickAccount}° vez`);  
            desplazarSeccionesUp(clickAccount) 
        }
    }
}


const hideAllClouds = () => {
    cloudImg1.setAttribute('class', 'move-izq-der-cloud');
    cloudImg2.setAttribute('class', 'move-izq-der-cloud');
    cloudImg3.setAttribute('class', 'move-izq-der-cloud');
    cloudImg4.setAttribute('class', 'move-izq-der-cloud');
    cloudImg5.setAttribute('class', 'move-izq-der-cloud');
}

const showAllClouds = () => {
    cloudImg1.setAttribute('class', 'move-der-izq-cloud');
    cloudImg2.setAttribute('class', 'move-der-izq-cloud');
    cloudImg3.setAttribute('class', 'move-der-izq-cloud');
    cloudImg4.setAttribute('class', 'move-der-izq-cloud');
    cloudImg5.setAttribute('class', 'move-der-izq-cloud');
}

const hidePortfolioWord = () => {
    imgSection1.childNodes[3].setAttribute('class', 'd-none')
}

const showPortfolioWord = () => {
    imgSection1.childNodes[3].setAttribute('class', 'd-block portfolio-title-style font-color-red')
}

const modificarContenidoUp = (title, description, srcImg, numberSection, newHref) => {
    section1.setAttribute('class', 'move-outside-window');
    //cambio el titulo de la seccion
    section1.childNodes[1].innerHTML = `${title}`
    setTimeout(() => {
        section1.setAttribute('class', 'move-inside-window')
    }, 100)
    //sacamos la palabra portafolio
    imgSection1.setAttribute('class', 'move-outside-window-img')
    imgSection1.childNodes[1].setAttribute('src', `${srcImg}`)
    setTimeout(() => {
        imgSection1.setAttribute('class', 'move-inside-window-img')
    }, 100)
    console.log(btnSection1.childNodes[1]);
    btnSection1.setAttribute('class', 'move-outside-window-btn');
    btnSection1.childNodes[1].innerHTML=`${description}`
    btnSection1.childNodes[3].setAttribute('href', `${newHref}`)
    setTimeout(() => {
        btnSection1.setAttribute('class', 'move-inside-window-btn')
    }, 100)
    numberSection1.setAttribute('class', 'move-outside-window-number');
    console.log(numberSection1.childNodes[1]);
    numberSection1.childNodes[1].innerHTML = `${numberSection}`
    setTimeout(() => {
        numberSection1.setAttribute('class', 'move-inside-window-number')
    }, 100)
}


const modificandoElementoSeleccionado = () => {
    console.log("Hola mundo click education");
}
btnEducation1.addEventListener('click', modificandoElementoSeleccionado)