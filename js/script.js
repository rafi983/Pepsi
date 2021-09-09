function imgSlider(img) {
  document.querySelector(".pepsi").src = `./images/${img}`;
}

const changeBgColor = (color) => {
  const sec = document.querySelector(".sec");
  sec.style.backgroundColor = color;
};

function toggleMenu() {
  const toggleMenu = document.querySelector(".toggleMenu");
  const navigation = document.querySelector(".navigation");
  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");
}
