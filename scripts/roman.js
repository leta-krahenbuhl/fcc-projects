window.onload = function () {
  document.querySelector("main").style.display = "block";
};

const convertButton = document.querySelector("#convert-btn");
const inputField = document.querySelector("#number");
const output = document.querySelector("#output");

convertButton.addEventListener("click", clickConvertButton);

function clickConvertButton() {
  if (!inputField.value) {
    output.innerText = "Please enter a valid number";
  } else if (inputField.value <= 0) {
    output.innerText = "Please enter a number between 1 and 3999";
  } else if (inputField.value >= 4000) {
    output.innerText = "Please enter a number between 1 and 3999";
  } else if (/[^0-9]/g.test(inputField.value)) {
    output.innerText =
      "Please make sure you enter numbers only, no letters or special characters.";
  } else {
    const inputSplit = inputField.value.toString().split("");
    const result = [];
    let resultJoined = "";

    function romanNumerals(number) {
      const romanNumeralsOneDigit = [
        "",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
      ];
      return romanNumeralsOneDigit[number];
    }

    if (inputField.value < 10) {
      result.push(romanNumerals(inputField.value));
      resultJoined = result;
    }

    if (inputField.value >= 10 && inputField.value <= 39) {
      const tensPlace = inputSplit[0];
      const ones = inputSplit[1];

      if (tensPlace == 1) {
        result.push("X");
      } else if (tensPlace == 2) {
        result.push("XX");
      } else {
        result.push("XXX");
      }

      result.push(romanNumerals(parseInt(ones)));

      resultJoined = result.join("");
    }

    if (inputField.value >= 40 && inputField.value <= 49) {
      result.push("XL");
      const ones = inputSplit[1];
      result.push(romanNumerals(parseInt(ones)));

      resultJoined = result.join("");
    }

    if (inputField.value >= 50 && inputField.value <= 89) {
      const tensPlace = inputSplit[0];
      const ones = inputSplit[1];

      if (tensPlace == 5) {
        result.push("L");
      } else if (tensPlace == 6) {
        result.push("LX");
      } else if (tensPlace == 7) {
        result.push("LXX");
      } else {
        result.push("LXXX");
      }

      result.push(romanNumerals(parseInt(ones)));
      resultJoined = result.join("");
    }

    if (inputField.value >= 90 && inputField.value <= 99) {
      const ones = inputSplit[1];

      result.push("XC");

      result.push(romanNumerals(parseInt(ones)));
      resultJoined = result.join("");
    }

    if (inputField.value >= 100 && inputField.value <= 399) {
      const hundredsPlace = inputSplit[0];
      const tensPlace = inputSplit[1];
      const ones = inputSplit[2];

      if (hundredsPlace == 1) {
        result.push("C");
      } else if (hundredsPlace == 2) {
        result.push("CC");
      } else {
        result.push("CCC");
      }

      if (tensPlace == 1) {
        result.push("X");
      } else if (tensPlace == 2) {
        result.push("XX");
      } else if (tensPlace == 2) {
        result.push("XXX");
      } else if (tensPlace == 4) {
        result.push("XL");
      } else if (tensPlace == 5) {
        result.push("L");
      } else if (tensPlace == 6) {
        result.push("LX");
      } else if (tensPlace == 7) {
        result.push("LXX");
      } else if (tensPlace == 8) {
        result.push("LXXX");
      } else if (tensPlace == 9) {
        result.push("XC");
      }

      result.push(romanNumerals(parseInt(ones)));
      resultJoined = result.join("");
    }

    if (inputField.value >= 400 && inputField.value <= 499) {
      const tensPlace = inputSplit[1];
      const ones = inputSplit[2];

      result.push("CD");

      if (tensPlace == 1) {
        result.push("X");
      } else if (tensPlace == 2) {
        result.push("XX");
      } else if (tensPlace == 2) {
        result.push("XXX");
      } else if (tensPlace == 4) {
        result.push("XL");
      } else if (tensPlace == 5) {
        result.push("L");
      } else if (tensPlace == 6) {
        result.push("LX");
      } else if (tensPlace == 7) {
        result.push("LXX");
      } else if (tensPlace == 8) {
        result.push("LXXX");
      } else if (tensPlace == 9) {
        result.push("XC");
      }

      result.push(romanNumerals(parseInt(ones)));
      resultJoined = result.join("");
      console.log(`line 162: ${resultJoined}`);
    }

    if (inputField.value >= 500 && inputField.value <= 899) {
      const hundredsPlace = inputSplit[0];
      const tensPlace = inputSplit[1];
      const ones = inputSplit[2];

      if (hundredsPlace == 5) {
        result.push("D");
      } else if (hundredsPlace == 6) {
        result.push("DC");
      } else if (hundredsPlace == 7) {
        result.push("DCC");
      } else if (hundredsPlace == 8) {
        result.push("DCCC");
      }

      if (tensPlace == 1) {
        result.push("X");
      } else if (tensPlace == 2) {
        result.push("XX");
      } else if (tensPlace == 2) {
        result.push("XXX");
      } else if (tensPlace == 4) {
        result.push("XL");
      } else if (tensPlace == 5) {
        result.push("L");
      } else if (tensPlace == 6) {
        result.push("LX");
      } else if (tensPlace == 7) {
        result.push("LXX");
      } else if (tensPlace == 8) {
        result.push("LXXX");
      } else if (tensPlace == 9) {
        result.push("XC");
      }

      result.push(romanNumerals(parseInt(ones)));
      resultJoined = result.join("");
    }

    if (inputField.value >= 900 && inputField.value <= 999) {
      const tensPlace = inputSplit[1];
      const ones = inputSplit[2];

      result.push("CM");

      if (tensPlace == 1) {
        result.push("X");
      } else if (tensPlace == 2) {
        result.push("XX");
      } else if (tensPlace == 2) {
        result.push("XXX");
      } else if (tensPlace == 4) {
        result.push("XL");
      } else if (tensPlace == 5) {
        result.push("L");
      } else if (tensPlace == 6) {
        result.push("LX");
      } else if (tensPlace == 7) {
        result.push("LXX");
      } else if (tensPlace == 8) {
        result.push("LXXX");
      } else if (tensPlace == 9) {
        result.push("XC");
      }

      result.push(romanNumerals(parseInt(ones)));
      resultJoined = result.join("");
    }

    if (inputField.value >= 1000 && inputField.value <= 3999) {
      const thousandsPlace = inputSplit[0];
      const hundredsPlace = inputSplit[1];
      const tensPlace = inputSplit[2];
      const ones = inputSplit[3];

      if (thousandsPlace == 1) {
        result.push("M");
      } else if (thousandsPlace == 2) {
        result.push("MM");
      } else if (thousandsPlace == 3) {
        result.push("MMM");
      }

      if (hundredsPlace == 1) {
        result.push("C");
      } else if (hundredsPlace == 2) {
        result.push("CC");
      } else if (hundredsPlace == 3) {
        result.push("CCC");
      } else if (hundredsPlace == 4) {
        result.push("CD");
      } else if (hundredsPlace == 5) {
        result.push("D");
      } else if (hundredsPlace == 6) {
        result.push("DC");
      } else if (hundredsPlace == 7) {
        result.push("DCC");
      } else if (hundredsPlace == 8) {
        result.push("DCCC");
      } else if (hundredsPlace == 9) {
        result.push("CM");
      }

      if (tensPlace == 1) {
        result.push("X");
      } else if (tensPlace == 2) {
        result.push("XX");
      } else if (tensPlace == 2) {
        result.push("XXX");
      } else if (tensPlace == 4) {
        result.push("XL");
      } else if (tensPlace == 5) {
        result.push("L");
      } else if (tensPlace == 6) {
        result.push("LX");
      } else if (tensPlace == 7) {
        result.push("LXX");
      } else if (tensPlace == 8) {
        result.push("LXXX");
      } else if (tensPlace == 9) {
        result.push("XC");
      }

      result.push(romanNumerals(parseInt(ones)));
      resultJoined = result.join("");
    }

    output.innerText = resultJoined;
  }
}

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
