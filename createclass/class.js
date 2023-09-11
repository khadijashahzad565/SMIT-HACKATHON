import{addClassToDb} from "../config/firebase.js"

window.addClass = async function(){
    const timings  = document.getElementById('timing').value
    const schedule = document.getElementById('schedule').value
    const teacherName  = document.getElementById('teacher-name').value
    const secName = document.getElementById('sec-name').value
    const courseName = document.getElementById('course-name').value
    const batchName = document.getElementById('batch-name').value

    try{
        await addClassToDb(timings,schedule,teacherName,secName,courseName,batchName)
        window.location.href ='../home.html'
    }catch(e){
        console.log('e',e.message)
    }
    
}