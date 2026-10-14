const book = document.getElementById("birthdayBook");
const cover = document.getElementById("bookCover");
const openButton = document.getElementById("openButton");
const letter = document.getElementById("letterMessage");
const hint = document.getElementById("controlHint");
let isOpen = false;

function toggleBook() {
  isOpen = !isOpen;
  book.classList.toggle("is-open", isOpen);
  letter.classList.toggle("visible", isOpen);
  openButton.innerHTML = isOpen
    ? 'Close your birthday letter <span>♡</span>'
    : 'Open your birthday letter <span>♡</span>';
  hint.textContent = isOpen
    ? "Your little birthday letter is waiting below."
    : "Turn the cover to discover your message.";

  if (isOpen) {
    window.setTimeout(() => letter.scrollIntoView({ behavior: "smooth", block: "start" }), 450);
  } else {
    document.querySelector(".book-scene").scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
cover.addEventListener("click", () => {
  if (!isOpen) toggleBook();
});
openButton.addEventListener("click", toggleBook);

// Gentle falling flower petals for a soft garden atmosphere.
const petalField = document.querySelector(".petal-field");
const flowers = ["✿", "❀", "✧", "·"];
for (let i = 0; i < 18; i++) {
  const petal = document.createElement("span");
  petal.className = "petal";
  petal.textContent = flowers[i % flowers.length];
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.animationDuration = `${10 + Math.random() * 15}s`;
  petal.style.animationDelay = `${-Math.random() * 18}s`;
  petal.style.fontSize = `${10 + Math.random() * 14}px`;
  petalField.appendChild(petal);
}
