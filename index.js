let navBar = document.querySelector(".nav-bar");

document.querySelector("#menu-btn").onclick = () => {
  navBar.classList.toggle("active");
};

window.onscroll = () => {
  Search.classList.remove("active");
  cartItem.classList.remove("active");
  navBar.classList.remove("active");
};
