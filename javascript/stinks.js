let nalaBox = document.querySelector('.nala-box');
let nalaChar = document.querySelector('.nala-character')
let nala = document.querySelector('.nala')
nalaBox.addEventListener('click',function(){

 if(nala.src !== "images/stinks_characterai_snt-skjs.png"){
  nala.src = "images/stinks_box_final_1200-skjs.jpg"
 }
})

nalaChar.addEventListener('click',function(){
 if(nala.src !== "stinks_box_final_1200-skjs.jpg"){
  nala.src = "images/stinks_characterai_snt-skjs.png"
 }
})