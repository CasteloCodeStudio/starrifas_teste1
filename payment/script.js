window.onload = function() {
  const numbers = document.querySelectorAll(".numberRifa");
  const selectedNumbers = [];

  numbers.forEach(number => {
    number.addEventListener("click", () => {
      if (number.classList.contains("selected")) {
        number.classList.remove("selected");
        selectedNumbers.splice(selectedNumbers.indexOf(number.value), 1);
        number.style.backgroundColor = "#fcce00"; // Switched to blue
        number.style.color = "white";
      } else {
        number.classList.add("selected");
        selectedNumbers.push(number.value);

        // Inverted colors here
        number.style.backgroundColor = "#cdcdcd"; // Switched to white-ish gray
        number.style.color = "black";
      }

      const selectNumbers = document.querySelector(".selectNumber");
      selectNumbers.textContent = selectedNumbers.join(", ");
    });
  });
};
