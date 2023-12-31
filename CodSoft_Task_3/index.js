const outputvalueElement = document.getElementById("outputvalue");
const buttonElements = document.querySelectorAll("button");
for (let i = 2; i < buttonElements.length - 1; i++) {
  buttonElements[i].addEventListener("click", () => {
    display(buttonElements[i].innerText);
  });
}
buttonElements[0].addEventListener("click", allClear);
buttonElements[1].addEventListener("click", del);
buttonElements[buttonElements.length - 1].addEventListener("click", calculate);

function display(character) {
  outputvalueElement.value += character;
}

function allClear() {
  outputvalueElement.value = "";
}

function del() {
  if (
    outputvalueElement.value === "Error" ||
    outputvalueElement.value === "Infinity" ||
    outputvalueElement.value === "NaN"
  ) {
    outputvalueElement.value = "";
  } else {
    outputvalueElement.value = outputvalueElement.value.slice(0, -1);
  }
}

function calculate() {
  try {
    console.log(outputvalueElement.value);
    let val = eval(outputvalueElement.value);
    if (val === "NaN" || val === "Infinity") {
      val = "Error";
    }
    outputvalueElement.value = val;
  } catch (error) {
    outputvalueElement.value = "Error";
  }
}
