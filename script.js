const giftBox = document.getElementById("giftBox");
const music = document.getElementById("bgMusic");
const birthdayMessage = document.getElementById("birthdayMessage");
const container = document.querySelector(".container");
const gallery = document.getElementById("gallery");
const cards = document.querySelectorAll(".photo-card");
const reasons = document.getElementById("reasons");
const reasonCards = document.querySelectorAll(".reason-card");
const finalSection = document.getElementById("finalSection");
const letterBtn = document.getElementById("letterBtn");
const letter = document.getElementById("letter");
const typedMessage = document.getElementById("typedMessage");

giftBox.addEventListener("click", () => {

    giftBox.classList.add("open");

    music.play();

    container.classList.add("opened");

    // Confetti burst
    confetti({
        particleCount: 150,
        spread: 120,
        origin: { y: 0.6 }
    });

    setTimeout(() => {
        birthdayMessage.classList.add("show");
        setInterval(createHeart, 700);
        setInterval(createStar, 800);
    }, 900);
    setTimeout(() => {

    gallery.classList.add("show");

    cards.forEach((card, index) => {

        setTimeout(() => {
            card.classList.add("show");
        }, index * 500);

    });

}, 2500);
setTimeout(() => {

    reasons.classList.add("show");

    reasonCards.forEach((card, index) => {

        setTimeout(() => {

            card.classList.add("show");

        }, index * 500);

    });

}, 5500);
setTimeout(() => {

    finalSection.classList.add("show");

}, 8500);
letterBtn.addEventListener("click", () => {

    letter.classList.add("show");

    let index = 0;

    typedMessage.innerHTML = "";

    const typing = setInterval(() => {

        typedMessage.innerHTML += finalMessage.charAt(index);

        index++;

        if(index >= finalMessage.length){
            clearInterval(typing);
        }

    }, 40);

    letterBtn.style.display = "none";

});
function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        4 + Math.random() * 4 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}
function createStar() {

    const star = document.createElement("div");

    star.classList.add("star");

    star.innerHTML = "✨";

    star.style.left =
        Math.random() * 100 + "vw";

    star.style.top =
        Math.random() * 100 + "vh";

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 5000);

}
const finalMessage = `

Thank you for being you ❤️

Im so grateful that i met you 
Coming to bangalore i wasnt expecting you know like a great friend but you turned out to be one of the best things that happened to me in bangalore. You make so comfortable and i can be completely myself around you .
You have a heart of gold and a spirit that shines bright.
I hope this year brings you as much joy and happiness as you bring to others. Keep being the amazing person you are, and never stop spreading
laughter and warmth into the lives
of the people around you.

No matter where life takes us,
I will always be grateful
that our paths crossed.

You deserve every beautiful thing
that comes your way.

May this year bring you
endless smiles,
new adventures,
and all the happiness
your heart can hold.

Happy Birthday  twin , my gurl 🎂✨

❤️
`;
});
