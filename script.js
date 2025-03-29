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
let intervalId;
let counter= 0;

// Fungsi merubah carousel
function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Fungsi untuk mereset interval
function resetInterval() {
  clearInterval(intervalId); // Hentikan interval sebelumnya
  startInterval(); // Mulai interval baru dari awal
}

// Fungsi memulai interval
function startInterval() {
  intervalId = setInterval(() => {
    index = (index + 1) % img.length;
    updateCarousel();
  }, 5000); // Durasi tetap 5000ms
}

// Event listener tombol next
next.addEventListener('click', () => {
  index = (index + 1) % img.length;
  updateCarousel();
  resetInterval(); // Reset waktu ke 5000ms lagi
});

// Event listener tombol prev
prev.addEventListener('click', () => {
  index = (index - 1 + img.length) % img.length;
  updateCarousel();
  resetInterval(); // Reset waktu ke 5000ms lagi
});

// Mulai interval pertama kali
startInterval();


//Menu Button
const prevA =document.getElementById('prevA');
const nextA =document.getElementById('nextA');
const menuContainer = document.getElementById('menuContainer');

prevA.addEventListener('click', () => {
  menuContainer.scrollBy({left: -200, behavior: 'smooth'});
})

nextA.addEventListener('click', () => {
  menuContainer.scrollBy({left: 200, behavior: 'smooth'});
})

