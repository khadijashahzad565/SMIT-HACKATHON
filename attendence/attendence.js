import{addStudentToDb} from"../config/firebase.js"

function search(){
    addStudentToDb()
    let id = document.getElementById('search').value
    for(let item of data){
        var card = document.getElementById('card')
        card.innerHTML=`<div>
        <h1>${item.rollno}</h1>
        <h1>${item.name}</h1>
        <h1>${item.fatherName}</h1>
        <h1>${item.contactNo}</h1>
    </div>`
    }
}
function present(){
    addStudentToDb()
    if(item.name==item.id){
        item.id==item.present
    }
}