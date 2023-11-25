const bungNav = document.querySelector('#bung-nav')
const rahiq = document.querySelector('#rahiq')
const navLink = document.querySelectorAll('.nav-link')

// Fungsi ketika window discroll
window.onscroll = () => {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    bungNav.classList.remove('bung-nav');
    bungNav.classList.add('bung-nav-scroll');
    rahiq.classList.add('text-secondary');
    rahiq.classList.remove('text-primary');
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].classList.add('text-secondary');
      navLink[i].classList.remove('text-primary');
    }
  } else {
    bungNav.classList.remove('bung-nav-scroll');
    bungNav.classList.add('bung-nav');
    rahiq.classList.remove('text-secondary');
    rahiq.classList.add('text-primary');
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].classList.add('text-primary');
      navLink[i].classList.remove('text-secondary');
    }
    
  }
};