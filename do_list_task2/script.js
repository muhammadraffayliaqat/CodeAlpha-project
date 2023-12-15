const inpbox=document.getElementById('inp-box');
const listcontainer=document.getElementById('list-cont');
function addTask(){
    if(inpbox.value===''){
        alert('You Must Write Something on it!')
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inpbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement('span')
        span.innerHTML='\u00d7';
        li.appendChild(span);
       
    }
    inpbox.value='';
    saveData();
}
listcontainer.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('check');
        saveData();
    }
   else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false)
function saveData(){
    localStorage.setItem('data',listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML=localStorage.getItem('data');
}
showTask();