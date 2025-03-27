//Fungsi Nav Mobile

//inisialisasi
const checkBox = document.getElementById('checkBox');
const slide  = document.getElementById('slide');

//Fungsi membuka slidebar
function openSlide(){
  slide.classList.remove('translate-x-full');
};

//Fungsi menutup slidebar
function closeSlide(){
  slide.classList.add('translate-x-full');
};

//Fungsi menutup slidebar dengan mengklik window diluar slide
window.addEventListener('click',(event)=>{
  if(!slide.contains(event.target) && !checkBox.contains(event.target)){
  closeSlide();
  //Mereset fungsi if else di bawah
  checkBox.checked = false;
  // console.log("other working")
  }
 });
 
 //Fungsi trigger slidebar
checkBox.addEventListener('change', (event) => {
  //Membuka saat tombol di click
  if(checkBox.checked){
    event.stopPropagation();
    openSlide();
    // console.log("if working")
  }
  //Menutup saat tombol di unclick
  else{
    closeSlide();
    // console.log("else working")
  }
});


//Fungsi Carousel

//Inisalisasi
const carousel = document.getElementById('carousel');
const img = document.querySelectorAll('#carousel img');
const prev= document.getElementById('prev');
const next =document.getElementById('next');
//Penetapan default index
let index=0;

//Fungsi merubah carousel
function updateCarousel(){
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

//Carousel akan bergeser ke kiri sebanyak tombol di klik
next.addEventListener('click',()=>{
  index = (index + 1) % img.length;
 updateCarousel();
})
//Carousel akan bergeser ke kanan sebanyak tombol di klik
prev.addEventListener('click',() =>{
  index = (index - 1 + img.length) % img.length;
  updateCarousel();
})
//Carousel akan bergeser ke kiri lalu di reset ke kanan dengan otomatis sesuai durasi
setInterval(() => {
  index = (index + 1) % img.length;
  updateCarousel();
}, 3000);
