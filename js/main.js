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
console.log(imgSection1, imgSection2, imgSection3);
let clickAccount = 0;
const moveSectionUp = () => {
    if(clickAccount !== 2){
        btnToMoveSectionDown.setAttribute('class', 'd-block move-btn-scroll-up-down')
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
        btnToMoveSectionUp.setAttribute('class', 'd-block move-btn-scroll-down-up')
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
        section1.setAttribute('class', 'd-none');
        section3.setAttribute('class', 'd-none')
        section2.setAttribute('class', 'd-block move-inside-window')
        imgSection1.setAttribute('class', 'd-none')
        imgSection3.setAttribute('class', 'd-none')
        imgSection2.setAttribute('class', 'd-block move-inside-window-img')
        btnSection1.setAttribute('class', 'd-none');
        btnSection3.setAttribute('class', 'd-none');
        btnSection2.setAttribute('class', 'd-block move-inside-window-btn');
        numberSection1.setAttribute('class', 'd-none');
        numberSection3.setAttribute('class', 'd-none');
        numberSection2.setAttribute('class', 'd-block move-inside-window-number');
        cloudImg1.setAttribute('class', 'd-none');
        cloudImg2.setAttribute('class', 'd-none');
        cloudImg3.setAttribute('class', 'd-none');
        cloudImg4.setAttribute('class', 'd-none');
        cloudImg5.setAttribute('class', 'd-none');
        break;
        case 2: //Debo iterar sobre arrySections y desplazar en 200vh agregando una clase primero borrar toda otra clase
        // console.log("deberia mostrar seccion 3");
        section1.setAttribute('class', 'd-none');
        section3.setAttribute('class', 'd-block move-inside-window')
        section2.setAttribute('class', 'd-none')
        imgSection1.setAttribute('class', 'd-none')
        imgSection3.setAttribute('class', 'd-block move-inside-window-img')
        imgSection2.setAttribute('class', 'd-none')
        btnSection1.setAttribute('class', 'd-none');
        btnSection3.setAttribute('class', 'd-block move-inside-window-btn');
        btnSection2.setAttribute('class', 'd-none');
        numberSection1.setAttribute('class', 'd-none');
        numberSection3.setAttribute('class', 'd-block move-inside-window-number');
        numberSection2.setAttribute('class', 'd-none');
        break;
        default: break;
    }
}

const desplazarSeccionesDown = (clickNumber) => {
    switch(clickNumber) {
        case 0: //Debo iterar sobre arrySections y desplazar en 100vh agregando una clase primero borrar toda otra clase
        // console.log("deberia mostrar la seccion 1");
        section1.setAttribute('class', 'd-block move-inside-window');
        section3.setAttribute('class', 'd-none')
        section2.setAttribute('class', 'd-none')
        imgSection1.setAttribute('class', 'd-block move-inside-window-img')
        imgSection3.setAttribute('class', 'd-none')
        imgSection2.setAttribute('class', 'd-none')
        btnSection1.setAttribute('class', 'd-block move-inside-window-btn');
        btnSection3.setAttribute('class', 'd-none');
        btnSection2.setAttribute('class', 'd-none');
        numberSection1.setAttribute('class', 'd-block move-inside-window-number');
        numberSection3.setAttribute('class', 'd-none');
        numberSection2.setAttribute('class', 'd-none');
        cloudImg1.setAttribute('class', 'd-block move-der-izq-cloud');
        cloudImg2.setAttribute('class', 'd-block move-der-izq-cloud');
        cloudImg3.setAttribute('class', 'd-block move-der-izq-cloud');
        cloudImg4.setAttribute('class', 'd-block move-der-izq-cloud');
        cloudImg5.setAttribute('class', 'd-block move-der-izq-cloud');
        break;
        case 1: //Debo iterar sobre arrySections y desplazar en 200vh agregando una clase primero borrar toda otra clase
        // console.log("deberia mostrar la seccion 2");
        section1.setAttribute('class', 'd-none');
        section3.setAttribute('class', 'd-none')
        section2.setAttribute('class', 'd-block move-inside-window')
        imgSection1.setAttribute('class', 'd-none')
        imgSection3.setAttribute('class', 'd-none')
        imgSection2.setAttribute('class', 'd-block move-inside-window-img')
        btnSection1.setAttribute('class', 'd-none');
        btnSection3.setAttribute('class', 'd-none');
        btnSection2.setAttribute('class', 'd-block move-inside-window-btn');
        numberSection1.setAttribute('class', 'd-none');
        numberSection3.setAttribute('class', 'd-none');
        numberSection2.setAttribute('class', 'd-block move-inside-window-number');
        break;
        default: break;
    }
}


btnToMoveSectionUp.addEventListener('click', moveSectionUp)
btnToMoveSectionDown.addEventListener('click', moveSectionDown)


//Event Handler up arrow and down arrow
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        // console.log("up arrow");
        if(clickAccount !== 0){
            btnToMoveSectionUp.setAttribute('class', 'd-block move-btn-scroll-down-up')
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
            btnToMoveSectionDown.setAttribute('class', 'd-block move-btn-scroll-up-down')
            clickAccount+=1;
            if(clickAccount ===2){
                btnToMoveSectionUp.setAttribute('class', 'd-none');
            }
            // console.log(`Clickeaste por ${clickAccount}° vez`);  
            desplazarSeccionesUp(clickAccount) 
        }
    }
}