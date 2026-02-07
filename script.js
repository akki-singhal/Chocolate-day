const choco = document.getElementById("choco");
const text = document.getElementById("gameText");
const nextBtn = document.getElementById("nextBtn");

let count = 0;

/* Cute Tap Messages */
const messages = [
  "Arre bhaag gayi 😝",
  "Arre fir bhaag gayi 😆",
  "Aree ruk ja yaar 😤",
  "Itni fast kyu ho 😭",
  "Aaja pakka nahi bhaagungi 😏",
  "Last chance 😈",
  "Pakad liyaaaa 😍🍫"
];

choco.addEventListener("click", () => {

  // Show message based on tap count
  text.innerText = messages[count];

  if (count < 6) {
    count++;

    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;

    choco.style.transform = `translate(${x}px, ${y}px)`;

  } else {
    // WIN STATE
    choco.style.transform = "translate(-50%, -50%) scale(1.6)";
    nextBtn.classList.remove("hidden");
  }

});
