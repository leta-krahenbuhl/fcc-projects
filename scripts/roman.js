window.onload = function () {
  document.querySelector("main").style.display = "block";
};

document
  .getElementById("scrollLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const scrollingElement = document.querySelector(".roman-main");
    const scrollHeight = scrollingElement.scrollHeight;
    scrollingElement.scrollTo({
      top: scrollHeight,
      behavior: "smooth",
    });
  });

document
  .getElementById("scrollLinkInfo")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const caloriesCounterElement = document.querySelector(
      ".roman-main__page-container-top"
    );
    caloriesCounterElement.scrollIntoView({ behavior: "smooth" });
  });
