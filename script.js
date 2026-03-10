const button = document.getElementById("modeToggle");

button.addEventListener("click", function(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
localStorage.setItem("mode","dark");
button.innerText="Light Mode";
}else{
localStorage.setItem("mode","light");
button.innerText="Dark Mode";
}

});

window.onload=function(){

if(localStorage.getItem("mode")==="dark"){
document.body.classList.add("dark-mode");
button.innerText="Light Mode";
}

};