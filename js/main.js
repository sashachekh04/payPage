window.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#inp");
  const icon = document.querySelector(".standart__logo");
  const expiryDate = document.querySelector("#expiryDate");

  input.addEventListener("input", (e) => {
    if (+e.target.value[0] === 4) {
      e.target.classList.add("input_green");
      icon.classList.add("active");
      icon.src = "./icons/visa.svg";
      icon.style.display = "block";
    } else if (+e.target.value[0] === 5) {
      e.target.classList.add("input_green");
      icon.classList.add("active");
      icon.src = "./icons/mastercard.svg";
      icon.style.display = "block";
    } else {
      icon.style.display = "none";
    }
  });

  input.addEventListener("keydown", (e) => {
    if(e.key === "Backspace" ) {
      e.target.classList.remove("input_green")
    }

    if (
      e.key !== "Backspace" &&
      (e.target.value.length === 4 ||
        e.target.value.length === 9 ||
        e.target.value.length === 14)
    ) {
      e.target.value += " ";
    }
    if (e.target.value.length > 18) {
      e.target.value = e.target.value.slice(0, 18);
    }
  });

  expiryDate.addEventListener("keydown", (e) => {
    e.target.value = e.target.value.slice(0, 4);

    if (e.target.value.length === 2 && e.key !== "Backspace") {
      e.target.value += "/";
    }
  });
});
