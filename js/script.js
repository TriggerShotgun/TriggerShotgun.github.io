
var dt = new Date();
document.getElementById("datetime").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));``

function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  } 
  

function like(){
    document.getElementById("up").style.width = "200px";
    document.getElementById("up").style.height = "100px";
    document.getElementById("up").style.backgroundColor = "green";
}
function dislike(){
    document.getElementById("down").style.width = "200px";
    document.getElementById("down").style.height = "100px";
    document.getElementById("down").style.backgroundColor = "red";  
}

  