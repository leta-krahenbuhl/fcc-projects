const checkButton = document.querySelector("#check-btn");
const textInput = document.querySelector("#text-input");
const result = document.querySelector("#result");
const inputTransformed = "";

checkButton.addEventListener("click", clickCheckButton);

function clickCheckButton() {
  if (!textInput.value) {
    alert("Please input a value");
  } else {
    const inputTransformed = textInput.value
      .toLowerCase()
      .replace(/_/g, "")
      .replace(/[^\w]/g, "");
    if (inputTransformed === inputTransformed.split("").reverse().join("")) {
      result.innerText = `${textInput.value} is a palindrome`;
    } else {
      result.innerText = `${textInput.value} is not a palindrome`;
    }
  }
}

document
  .getElementById("scrollLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const scrollingElement = document.querySelector(".palindrome-checker-main");
    const scrollHeight = scrollingElement.scrollHeight;
    scrollingElement.scrollTo({
      top: scrollHeight,
      behavior: "smooth",
    });
  });
