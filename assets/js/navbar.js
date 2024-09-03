let isOpen = false;
function openHumberger() {
  let humbergerButton = document.getElementById("humberger-nav-container");

  if (!isOpen) {
    //artinya humber sudah di click
    humbergerButton.style.display = "flex";
    isOpen = true; //si icon dia terbuka atau terclik
  } else {
    humbergerButton.style.display = "none";
    isOpen = false;
  }
}

// 1. kondisi awal dia none
// 2. kondisi di click -> isopen true
// 3 diklik 1x lagi dia bakaln membaca perbahan dari si isOpen
// 4. Apa yang terjadi ketika kondisinya adalah
// - true -> membuat display flex
// - false -> display none

function checkScreenSize() {
  let humbergerButton = document.getElementById("humberger-nav-container");
  if (window.innerWidth > 500) {
    humbergerButton.style.display = "none";
    isOpen = false; // reset status isOpen ketika layar lebih dari 500px
  }
}

// Tambahkan event listener untuk memantau perubahan ukuran layar
window.addEventListener("resize", checkScreenSize);

