let nalaBox = document.querySelector('.nala-box');
let nalaChar = document.querySelector('.nala-character')
let nala = document.querySelector('.nala')
nalaBox.addEventListener('click',function(){

 if(nala.src !== "images/arthurv2_character_sh-isu2.png"){
  nala.src = "images/mixtapearthur_box_final_1200-isu2.jpg"
 }
})

nalaChar.addEventListener('click',function(){
 if(nala.src !== "images/mixtapearthur_box_final_1200-isu2.jpg"){
  nala.src = "images/arthurv2_character_sh-isu2.png"
 }
})