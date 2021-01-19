const btnProfile=document.querySelector(".btn-profile");
const profileInfo=document.querySelector(".profile-info");

btnProfile.onclick=()=>{
    profileInfo.classList.toggle("active")
}


function getFile() {
    document.getElementById("upfile").click();
  }
  
  function sub(obj) {
    var file = obj.value;
    var fileName = file.split("\\");
    document.getElementById("yourBtn").innerHTML = fileName[fileName.length - 1];
    document.myForm.submit();
    event.preventDefault();
  }