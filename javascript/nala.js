let nalaBox = document.querySelector('.nala-box');
let nalaChar = document.querySelector('.nala-character')
let nala = document.querySelector('.nala')

nalaBox.addEventListener('click', function(){
 if(nala.src !== "images/nalathecat_characterai_ry-pkkd-min.png"){
  nala.src = "images/nalathecat_box_final_1200.webp"
 }
  

})
nalaChar.addEventListener('click' , function(){
 if(nala.src !== "images/nalathecat_box_final_1200.webp"){
  nala.src = "images/nalathecat_characterai_ry-pkkd-min.png"
 }
})

