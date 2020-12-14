// Audio
const sounds = ["sounds/motherfucker.mp3"];
let audioMotherfucker = new Audio(sounds[0]);

// useful constants
const gifImage = document.querySelector(".centerGif");
const bottomSection = document.querySelector(".bottomSection");
const instructions = document.querySelector(".instructions");
const newInstructions = document.querySelector(".newInstructions");

// Initial button when opening site
const button = document.querySelector(".startBtn");
button.addEventListener("click", function (e) {
  audioMotherfucker.currentTime = 0.5;
  audioMotherfucker.play();
  button.style.display = "none";
  pauseButton.style.display = "block";
  instructions.style.display = "block";
  playAgainButton.style.display = "block";
  gifImage.style.transform = "translateX(0)";
});

// Play the best part again
const playAgainButton = document.querySelector(".playAgainBtn");
playAgainButton.addEventListener("click", function (e) {
  audioMotherfucker.currentTime = 68;
  audioMotherfucker.play();
  instructions.style.display = "none";
  newInstructions.style.display = "block";
});

// Pause the sound
const pauseButton = document.querySelector(".pauseBtn");
pauseButton.addEventListener("click", function (e) {
  audioMotherfucker.pause();
  bottomSection.style.display = "grid";
  instructions.style.display = "none";
  newInstructions.style.display = "block";
});

// ENTER pause sound
window.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    audioMotherfucker.pause();
    bottomSection.style.display = "grid";
  }
});

//scroll down event

let runGridLoop = true;
window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if (scrolled === scrollable && runGridLoop) {
    bottomSection.style.background = "none";
    bottomSection.style.backgroundColor = "hotpink";
    let start = true;
    let i = 0;
    let j = 0;
    if (start) {
      while (i < 32) {
        if (j === unicorns.length) {
          j = 0;
        }

        let imgUrl = unicorns[j];
        let gItem = `
        <div class="gridItem">
          <img src="${imgUrl}" alt="A beautiful unicorn" />
        </div>
      `;
        const gridItem = document.createRange().createContextualFragment(gItem);

        bottomSection.appendChild(gridItem);

        i++;
        j++;
        runGridLoop = false;
      }
    }
  }
});

// Unicorns
const unicorns = [
  "https://media4.giphy.com/media/26AHG5KGFxSkUWw1i/giphy.gif?cid=ecf05e47l0tb5e0ucz6qrsety81beet3pxhshbpbzs4mia1k&rid=giphy.gif",
  "https://media1.giphy.com/media/j0kQJxo5mzGYb4EvWK/giphy.gif?cid=ecf05e47l0tb5e0ucz6qrsety81beet3pxhshbpbzs4mia1k&rid=giphy.gif",
  "https://media1.giphy.com/media/l3978LHbIV5GAzRPG/giphy.gif?cid=ecf05e47ea6d4e4390c5c6456438dd1da54542745a2140ef&rid=giphy.gif",
  "https://media3.giphy.com/media/26vUtaGG7GgpdKqm4/giphy.gif?cid=ecf05e470d6601ef7e2321deeb89c19e9bd47a2fc7892b56&rid=giphy.gif",
  "https://media4.giphy.com/media/154TZq3OVezAs/giphy.gif?cid=ecf05e472e2c6a28412a6006c3b80be51da31633050a272b&rid=giphy.gif",
];

// const newDiv = bottomSection
