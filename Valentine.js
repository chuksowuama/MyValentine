const rejectionGifs = [
  "gif/Cry1.gif",
  "gif/Cry2.gif",
  "gif/cry4.gif",
];
const rejectText = [
  "Please nah i will buy you ice cream",
  "Don’t press No again, my village people are watching 😩",
  "This rejection is loading premium tears 😭💎",
];

const acceptanceGif = [
  "gif/Happy1.gif",
  "gif/Happy2.gif",
  "gif/Happy3.gif",
];

const acceptText = [
  "Yaaaay!!! 💖 I knew you would say yes 😍",
  "Best decision of your life 😎❤️",
  "Valentine secured! 🥰🍫",
];

let Yes = document.querySelector(".yes");
let no = document.querySelector(".no");
let gif = document.querySelector(".gifIMG");
let valtext = document.querySelector(".valtext");
let Valcont = document.querySelector(".vals");

let current = 0;
let hasShownResult = false;

Yes.addEventListener("click", () => {
  if (hasShownResult) return;
  gif.src = acceptanceGif[current];
  valtext.textContent = acceptText[current];
  current++;

  if (current >= acceptanceGif.length) {
    hasShownResult = true;
    Valcont.innerHTML = "";
    let h1 = document.createElement("H1");
    h1.textContent = "I LOVE YOU BABY ❤️";
    h1.classList.add("BreakUP");
    
    Valcont.appendChild(h1);
  }
});

no.addEventListener("click", () => {
  if (hasShownResult) return;

  gif.src = rejectionGifs[current];
  valtext.textContent = rejectText[current];
  current++;

  if (current >= rejectionGifs.length) {
    hasShownResult = true;
    Valcont.innerHTML = "";
    let h1 = document.createElement("H1");
    h1.textContent = "YOU HAVE JUST BROKEN, SHEY YOU ARE HAPPY";
    h1.classList.add("BreakUP");

    const backBtn = document.createElement("button");
    backBtn.textContent = "Changed your mind?";
    backBtn.classList.add("buttons");

    backBtn.addEventListener("click", () => {
      location.reload();
    });

    Valcont.appendChild(h1);
    Valcont.appendChild(backBtn);
  }
});
