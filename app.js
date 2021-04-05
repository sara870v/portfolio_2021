

console.log("Hello");

// let menu = document.querySelector("#menu");
// let overlay = document.querySelector("nav .overlay");
// let overlaycontent = document.querySelector(".overlaycontent");
// let exit = document.querySelector(".closebtn");
// let dropcontent = document.querySelector(".dropdown-content");

// menu.addEventListener("click", showOverlay);

// function showOverlay() {
//   overlay.style.width = "250px";
//   overlaycontent.style.display = "block";
//   exit.style.display = "block";
//   menu.style.visibility = "hidden";

//   exit.addEventListener("click", closeOverlay);
// }

// function closeOverlay() {
//   overlay.style.width = "0%";
//   overlaycontent.style.display = "none";
//   exit.style.display = "none";
//   menu.style.visibility = "visible";
// }


let menu = document.querySelector(".burger");
let overlay = document.querySelector(".overlay");

let exit = document.querySelector(".burger_top a")

menu.addEventListener("click", showOverlay);

function showOverlay(){

overlay.style.width = "250px";
overlay.style.display = "block";

exit.addEventListener("click", closeOverlay);

    
}

function closeOverlay(){
 overlay.style.width = "0%";
overlay.style.display = "none";
}