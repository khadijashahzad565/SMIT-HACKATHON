import { uploadImage ,addStudentToDb,getRealTime} from "../config/firebase.js"

window.courses =  function(){
    getRealTime((clas)=>{

        //4
        const adsElem = document.getElementById('select-course')
      adsElem.innerHTML=''
        for(let item of clas){
            var opt = document.createElement('option')
            opt.innerHTML = item.courseName
            opt.value = item.courseName
            opt.setAttribute('onclick','select(event)')
            adsElem.appendChild(opt)
        }
    })
}
var selectValue;
function select(event){
    var value = event.target

    selectValue=value
}
window.addStudent = async function(){
    window.location.href="../home.html"
    const name = document.getElementById('name').value
    const fathername = document.getElementById('father-name').value
    const rollNo = document.getElementById('roll-no').value
    const contactNo = document.getElementById('contact-no').value
    const cnic = document.getElementById('cnic').value
    const courseName = document.getElementById('cousre-name-forstudent').value
    const image = document.getElementById('image').files[0]

    try{
        const imageUrl = await uploadImage(image)
        await addStudentToDb(name,fathername,contactNo,rollNo,cnic,courseName,imageUrl,selectValue)
    
    }catch(e){
        console.log('e',e.message)
    }
}