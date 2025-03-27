//Fungsi Nav Mobile
const checkBox = document.getElementById('checkBox');
const slide  = document.getElementById('slide');

function triggerSlide(){
  slide.classList.toggle('translate-x-full');
};

checkBox.addEventListener('click', (event) => {
event.stopPropagation();
  triggerSlide();

});

window.addEventListener('click',(event)=>{
 if(!slide.contains(event.target)){
 triggerSlide();
 }
});





//Fungsi Carousel
const carousel = document.getElementById('carousel');
const img = document.querySelectorAll('#carousel img');
const prev= document.getElementById('prev');
const next =document.getElementById('next');

let index=0;

function updateCarousel(){
  carousel.style.transform = `translateX(-${index * 100}%)`;
}


next.addEventListener('click',()=>{
  index = (index + 1) % img.length;
 updateCarousel();
})

prev.addEventListener('click',() =>{
  index = (index - 1 + img.length) % img.length;
  updateCarousel();
})

setInterval(() => {
  index = (index + 1) % img.length;
  updateCarousel();
}, 3000);
