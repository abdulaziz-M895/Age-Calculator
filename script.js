const ageForm = document.querySelector("#age-form");
const yearInput = document.querySelector("#year");
yearInput.setAttribute("max", new Date().getFullYear());

function isValidInputs(inputs) {
  let isValid = true;

  inputs.forEach((input) => {
    if (input.value.length <= 0) {
      isValid = false;
      input.classList.add("card__input--error");
    } else {
      input.classList.remove("card__input--error");
    }
  });

  return isValid;
}

function calculateAge(birthDate) {
  birthDate = new Date(birthDate);
  const currentDate = new Date();

  let years = currentDate.getFullYear() - birthDate.getFullYear();

  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() == birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    years--;
  }

  return years;
}

ageForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const day = this.querySelector("#day").value;
  const month = this.querySelector("#month").value;
  const year = yearInput.value;

  const inputs = document.querySelectorAll(".card__input");

  if (isValidInputs(inputs)) {
    const resultVale = document.querySelector(".card__resultValue");
    resultVale.innerHTML = calculateAge(`${month}/${day}/${year}`); // Format: MM/DD/YYYY
  }
});
