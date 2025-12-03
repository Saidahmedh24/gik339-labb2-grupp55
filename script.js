// Script för index.html
// Här går Abdulahi igenom koden

const checkboxElement = document.getElementsByName("divStyle")[0];
console.log(checkboxElement);

const textElements = document.getElementsByClassName("textfield");
console.log(textElements);

const removeButton = document.getElementById("removeBtn");
console.log(removeButton);

const divElement = document.getElementById("outputBox");
console.log(divElement);

// Checkbox – ändrar färg oavsett checked eller inte
// Här går Said igenom
checkboxElement.addEventListener("change", function () {
  const colorValue = document.getElementById("color").value;
  divElement.style.backgroundColor = colorValue;
});

// Eventlyssnare till alla textfält
for (let input of textElements) {
  input.addEventListener("input", changeColorOrPrintInDiv);
}

// Funktion – här går Abdulahi igenom denna del
function changeColorOrPrintInDiv(e) {
  console.log(e.target);

  const value = e.target.value;
  const fieldName = e.target.name;

  if (fieldName === "content") {
    divElement.innerHTML = value;
  }
}

// Knappen tar bort div från DOM
removeButton.addEventListener("click", function () {
  divElement.remove();
});
