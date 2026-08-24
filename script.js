for (let i = 1; i <= 20; i++) {

  const input = document.getElementById(`q${i}`);
  const answer = document.getElementById(`answer-${i}`);

  if (!input || !answer) continue;

  input.addEventListener("input", () => {
    answer.textContent = input.value;
  });

}