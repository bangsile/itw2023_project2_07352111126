const bungNav = document.querySelector('#bung-nav')
const rahiq = document.querySelector('#rahiq')
const navLink = document.querySelectorAll('.nav-link') //nilai kembaliannya berupa array
const topBtn = document.querySelector('#top-btn')

// Fungsi ketika window discroll
window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
    bungNav.classList.remove('bung-nav');
    bungNav.classList.add('bung-nav-scroll');
    rahiq.classList.add('text-secondary');
    rahiq.classList.remove('text-primary');
		bungNav.classList.add('nav-shadow')

    //gunakan perulangan untuk ganti semua class nav-link
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].classList.add('text-secondary');
      navLink[i].classList.remove('text-primary');

    }

  } else {
    topBtn.style.display = "none";
    bungNav.classList.remove('bung-nav-scroll');
    bungNav.classList.add('bung-nav');
    rahiq.classList.remove('text-secondary');
    rahiq.classList.add('text-primary');
		bungNav.classList.remove('nav-shadow')

    //gunakan perulangan untuk ganti semua class nav-link
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].classList.add('text-primary');
      navLink[i].classList.remove('text-secondary');
    }

  }
};

// Fungsi untuk button go to top
function goToTop() {
  document.documentElement.scrollTop = 0;
}
//-END-//