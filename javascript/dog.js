let nalaBox = document.querySelector('.nala-box');
let nalaChar = document.querySelector('.nala-character')
let nala = document.querySelector('.nala')
nalaBox.addEventListener('click',function(){

 if(nala.src !== "images/dogwifhat_characterai_ry-xkcd-min.png"){
  nala.src = "images/dogwifhat_box_final_1200.jpg"
 }
})

nalaChar.addEventListener('click',function(){
 if(nala.src !== "images/dogwifhat_box_final_1200.jpg"){
  nala.src = "images/dogwifhat_characterai_ry-xkcd-min.png"
 }
})