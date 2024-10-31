// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) { 
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

//Gambar Utama
const img = document.querySelector('img');

// Buat fungsi untuk toggle kelas grayscale
setInterval(function() {
    img.classList.toggle('grayscale');
}, 2000);  // Ubah setiap 1 detik (1000 ms)
