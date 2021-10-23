const title = document.querySelector(".js-title"),
  range = document.querySelector(".js-range"),
  choosenum = document.querySelector(".js-guess"),
  result = document.querySelector(".js-result");

function handleRangeChange(event) {
  const chooseRange = title.querySelector("span");
  chooseRange.innerText = range.value;
}

function handleGuessSubmmit(event) {
  event.preventDefault();
  const guessInput = choosenum.querySelector("input");
  if (guessInput.value === "") {
    return;
  }
  const max = range.value,
    random = Math.ceil(Math.random()*max),
    userGuess = guessInput.value,
    resultSpan = result.querySelector("span");
  resultSpan.innerHTML = `You choose: <strong>${userGuess}</strong>, The machine choose: <strong>${random}</strong>.<br/>
  <strong> ${userGuess > random ? "You win!" : "You lose!"}</strong>`;
}

function init() {
    choosenum.addEventListener("submit", handleGuessSubmmit);
    range.addEventListener("input", handleRangeChange);
}
init();