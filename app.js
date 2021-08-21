
const addTask = document.getElementById('addTask');
const inputTask = document.getElementById('inputTask');
const taskContent = document.getElementById('taskContent');
const countTodo = document.getElementById('countTodo');
const deleteTask = document.getElementById('deleteTask');

const darkModeBg = document.getElementById('darkmode');

/* html element to add 



const taskItem = document.createElement('div');
taskItem.setAttribute("class", "taskItem");
const checkContainer = document.createElement('div');
checkContainer.setAttribute("class", "checkContainer");

const newTask = document.createElement('p');
newTask.setAttribute('id', 'newTask');

const cross = document.createElement('img');
cross.setAttribute("class", 'crossIcon');
cross.src = "./images/icon-cross.svg";
taskItem.appendChild(checkContainer);
taskItem.appendChild(newTask);
taskItem.appendChild(cross);*/

let nbrOfTask = 0;

addTask.addEventListener("click", ()=>{
    
if(inputTask.value.length > 0 ){
    nbrOfTask++;
    let nbrOfCross = nbrOfTask;
    
   // countTodo.innerText = `you have ${nbrOfTask} items `;

    const taskItem = document.createElement('div');
    taskItem.classList.add("taskItem");


    const checkContainer = document.createElement('div');
    checkContainer.classList.add('checkContainer');
    const checkImg = document.createElement('img');
    checkImg.src = "./images/icon-check.svg";
    checkImg.classList.add('fit-checker');
    
    const newTask = document.createElement('p');
    newTask.setAttribute('id', 'newTask');
    newTask.innerText = inputTask.value;
    

    const cross = document.createElement('img');
    cross.classList.add("crossIcon");
    cross.src = "./images/icon-cross.svg";
    

    
    taskItem.appendChild(checkContainer);
    taskItem.appendChild(newTask);
    taskItem.appendChild(cross);

    taskContent.appendChild(taskItem);
    
    
    //add the img checker when checkcontainer is clicked and make a line through on your text
    checkContainer.addEventListener('click',()=>{
        
        
        checkContainer.appendChild(checkImg);
        checkContainer.style.backgroundColor = 'blue';
        newTask.style.textDecoration ='line-through'; 
        
       if(nbrOfTask >= 1){
        nbrOfTask--;
        countTodo.innerText = `${nbrOfTask} item(s) left`;
       }


    })


    //remove img on double click and remove line through
    checkContainer.addEventListener('dblclick',()=>{
        checkImg.remove();
        checkContainer.style.backgroundColor = 'inherit';
        newTask.style.textDecoration ='none'; 

    })

    // make the cross icon visible on mouseover the taskitem 
    taskItem.addEventListener('mouseover', ()=>{
        cross.style.opacity = 1;
        
    })
    //on mouse out it display none the cross image
    taskItem.addEventListener('mouseout', ()=>{
        cross.style.opacity = 0;
    })

    //remove the taskItem when you click on the cross icon
    cross.addEventListener('click', ()=>{ 

    
        if(nbrOfTask >= 1 && newTask.style.textDecoration !== 'line-through'){
            taskItem.remove();
            nbrOfTask--;
            countTodo.innerText = `${nbrOfTask} item(s) left`;
        } 

       if(nbrOfCross >= nbrOfTask - 1 && newTask.style.textDecoration === 'line-through'){
            taskItem.remove();
            countTodo.innerText = `${nbrOfTask} item(s) left`;
        }



    })

    deleteTask.addEventListener('click', ()=>{
        if( newTask.style.textDecoration === 'line-through'){
            taskItem.remove();
        }
    })

    
    inputTask.placeholder = 'Create a new todo...';
    
    inputTask.value = '';
}

countTodo.innerText = `${nbrOfTask} item(s) left`;
});


















