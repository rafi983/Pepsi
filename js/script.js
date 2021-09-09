function imgSlider(img) {
  document.querySelector(".pepsi").src = `./images/${img}`;
}

const changeBgColor = (color) => {
  const sec = document.querySelector(".sec");
  sec.style.backgroundColor = color;
};
