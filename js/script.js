// DOM-Document object model
// document.querySelector(".fa-xmark").addEventListener('click', function(){
//     alert("x iconu klinlendi")

 
// })

// function istifadeciniSalamla (name ,surname){
//     console.log(`salam , Yeni istifadeci ${name} ${surname}`)
// }
// istifadeciniSalamla('Metanet', 'Bekirova')

document.querySelector('.fa-xmark').addEventListener('click', function(){
    document.querySelector('.overlay-menu').style.width="0"

})
document.querySelector('.fa-bars').addEventListener('click', function(){
    document.querySelector('.overlay-menu').style.width="100%"
})

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
  });