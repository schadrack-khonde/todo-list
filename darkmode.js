const darkMode = document.getElementById('darkmode');
const headerBg = document.getElementById('header_section');
const taskContentBg = document.getElementById('taskContent');
const inputTaskColor =  document.getElementById("inputTask");
const taskSection = document.getElementsByClassName('tasks-section')[0];
const inputFieldBg = document.getElementsByClassName('inputField')[0];
const updateBg = document.getElementsByClassName('update')[0];
const historyBg = document.getElementsByClassName('history')[0];
let checker = false;
let screenWidth = window.screen.width;


darkMode.onclick = ()=>{
    historyBg.classList.toggle('whiteBg');
    inputFieldBg.classList.toggle('whiteBg');
    updateBg.classList.toggle('whiteBg');
    taskContentBg.classList.toggle('whiteBg');
   // taskContentBg.classList.toggle('whiteColor');
   // taskContentBg.classList.toggle('blackColor');
    
    if(!checker){
        darkMode.src = "./images/icon-moon.svg";  
        
        taskContentBg.classList.remove('blackColor');    
        taskContentBg.classList.add('whiteColor'); 

        inputTaskColor.classList.add('inputColorBlack');
        inputTaskColor.classList.remove('inputColorWhite');

        checker = true;
        if(screenWidth <= 768){
            headerBg.style.backgroundImage =  'url("./images/bg-mobile-light.jpg")';

            taskSection.style.backgroundColor = 'hsl(236, 33%, 92%)';
        }else if(screenWidth >= 768){
            headerBg.style.backgroundImage = 'url("./images/bg-desktop-light.jpg")';
            taskSection.style.backgroundColor = 'hsl(236, 33%, 92%)';
        }
        //headerBg.classList.toggle("desktop-light-bg");

        //.mobile-light-bg
        //.desktop-light-bg
    }else{
        darkMode.src = "./images/icon-sun.svg";
                  
        taskContentBg.classList.remove('whiteColor'); 
        taskContentBg.classList.add('blackColor');

        inputTaskColor.classList.add('inputColorWhite');
        inputTaskColor.classList.remove('inputColorBlack');
        checker = false;
        if(screenWidth <= 768){
            headerBg.style.backgroundImage ='url("./images/bg-mobile-dark.jpg")';
            taskSection.style.backgroundColor = 'hsl(235, 21%, 11%)';
        }else if(screenWidth >= 768){
            headerBg.style.backgroundImage = 'url("./images/bg-desktop-dark.jpg")';
            taskSection.style.backgroundColor = 'hsl(235, 21%, 11%)';
        }
    }
}

