const checkBox = document.getElementById('checkBox');
const slide  = document.getElementById('slide');

checkBox.addEventListener('click', () => {
  slide.classList.toggle('translate-x-full')
  slide.classList.remove('hidden')
})

// document.getElementById("checkBox").addEventListener("change", function() {
//   const slideMenu = document.getElementById("slide");
//   if (this.checked) {
//       slideMenu.classList.remove("-right-full");
//       slideMenu.classList.add("right-0");
//   } else {
//       slideMenu.classList.remove("right-0");
//       slideMenu.classList.add("-right-full");
//   }
// });