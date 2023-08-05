"use strict";

// Header에 페이지 아래로 스크롤 시 다크 스타일링 적용
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

// Home section을 아래로 스크롤 시 투명하게 처리함
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Arrow up 버튼을 아래로 스크롤 시 투명하게 처리함
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

// Navbar toggole button click 처리
const navbarMenu = document.querySelector(".header__menu");
const navbarToggle = document.querySelector(".header__toggle");
navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// Navbar 메뉴 클릭 시 자동으로 닫아줌
navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.remove("open");
});

document.addEventListener("DOMContentLoaded", function () {
  const majorsList = document.getElementById("majors-list");
  const majorItems = majorsList.getElementsByClassName("major");

  let maxWidth = 0;

  for (let i = 0; i < majorItems.length; i++) {
    const itemWidth = majorItems[i].offsetWidth;
    if (itemWidth > maxWidth) {
      maxWidth = itemWidth;
    }
  }

  // 가장 큰 너비를 모든 li 요소에 적용합니다.
  for (let i = 0; i < majorItems.length; i++) {
    majorItems[i].style.width = maxWidth + "px";
  }
});
