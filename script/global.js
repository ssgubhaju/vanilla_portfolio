burger = document.getElementById("burger");
linkList = document.getElementById("link-list");
navbar = document.getElementById("navbar");

burger.addEventListener("click", () => {
  linkList.classList.toggle("active");
  navbar.classList.toggle("active");
});
