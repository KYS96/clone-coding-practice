'user strict';

//Header에 페이지 아래로 스크롤 시 다크 스타일링 적용!
const header = document.querySelector('.header')
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if(window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark')
  }
});

//아래로 스크롤링 할 수록 Home 섹션에 있는 요소 투명도를 낮추기
//y축의 좌표가 HOME 섹션에 다다를수록 불투명해지게 만들기
const home = document.querySelector('.home__container')
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//arrow 요소 - 투명도 설정
const arrowUp = document.querySelector('.arrow-up');
const arrowHeight = arrowUp.offsetHeight;
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

//Navbar 토글버튼 클릭처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle  = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
})

//Navbar 메뉴 클릭 시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
})

