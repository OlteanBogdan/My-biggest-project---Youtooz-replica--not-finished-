let nalaBox = document.querySelector('.nala-box');
let nalaChar = document.querySelector('.nala-character')
let nala = document.querySelector('.nala')
nalaBox.addEventListener('click',function(){

 if(nala.src !== "images/jessepinkman_characterai_rb-min-xusa.webp"){
  nala.src = "images/jessepinkman_box_final_1200-xusa.jpg"
 }
})

nalaChar.addEventListener('click',function(){
 if(nala.src !== "images/jessepinkman_box_final_1200-xusa.jpg"){
  nala.src = "images/jessepinkman_characterai_rb-min-xusa.webp"
 }
})