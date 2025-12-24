function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  const headerHeight = document.querySelector(".header").offsetHeight;

  const position = section.offsetTop - headerHeight - 10;

  window.scrollTo({
    top: position,
    behavior: "smooth"
  });

  toggleMenu();
}
