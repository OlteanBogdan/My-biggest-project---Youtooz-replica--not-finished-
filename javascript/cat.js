let nalaBox = document.querySelector('.nala-box');
let nalaChar = document.querySelector('.nala-character')
let nala = document.querySelector('.nala')
nalaBox.addEventListener('click',function(){

 if(nala.src !== "images/cryingcat-min.png"){
  nala.src = "images/cryingcat_box_final_1200-9qe0.jpg"
 }
})

nalaChar.addEventListener('click',function(){
 if(nala.src !== "images/cryingcat_box_final_1200-9qe0.jpg"){
  nala.src = "images/cryingcat-min.png"
 }
})