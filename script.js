const nameInput = document.getElementById("name");
const cardName = document.getElementById("card-name");

nameInput.addEventListener("input", () => {
  cardName.textContent = nameInput.value || "Character Name";
});