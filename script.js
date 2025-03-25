const checkBox = document.getElementById('checkBox');
const slide  = document.getElementById('slide');

checkBox.addEventListener('click', () => {
  slide.classList.toggle('translate-x-full')
  
})