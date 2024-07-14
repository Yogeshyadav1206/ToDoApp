
let items=[];

function addlist(){
    let toaddtask=document.querySelector('#inpt').value;
    let toadddate=document.querySelector('#date').value;
    items.push({task:toaddtask,date:toadddate});
    document.querySelector('#inpt').value='';
    document.querySelector('#date').value='';
}
function showlist(){
    let conatinerElement=document.querySelector('#to-do-container');
    let html='';
    for(let i=0;i<items.length;i++){
        let x=items[i].task;
        let y=items[i].date;
      html+=
        ` 
        <span>${x}</span>
         <span>${y}</span>
        <button id='dlt-btn' onclick="items.splice(${i},1);showlist()">Delete</button>
         `;
    }
    conatinerElement.innerHTML=html;
}
