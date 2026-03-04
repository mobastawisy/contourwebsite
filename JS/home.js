const track = document.getElementById("projectsTrack");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const visibleCards = 3;
let index = visibleCards;
let cardWidth;
function initSlider() {
  if (window.innerWidth <= 768) return;

  // your slider code here

/* SETUP */
function setupInfiniteSlider() {
  const cards = [...track.children];
  cardWidth = cards[0].offsetWidth + 40;

  // Clone last & first cards
  const firstClones = cards.slice(0, visibleCards).map(card => card.cloneNode(true));
  const lastClones = cards.slice(-visibleCards).map(card => card.cloneNode(true));

  lastClones.forEach(clone => track.prepend(clone));
  firstClones.forEach(clone => track.append(clone));

  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

setupInfiniteSlider();

/* SLIDE */
function slide() {
  track.style.transition = "transform 0.6s ease";
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

/* NEXT */
nextBtn.addEventListener("click", () => {
  index++;
  slide();
});

/* PREV */
prevBtn.addEventListener("click", () => {
  index--;
  slide();
});

/* RESET POSITION INVISIBLY */
track.addEventListener("transitionend", () => {
  const totalCards = track.children.length;

  if (index >= totalCards - visibleCards) {
    track.style.transition = "none";
    index = visibleCards;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  if (index <= 0) {
    track.style.transition = "none";
    index = totalCards - visibleCards * 2;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }
});

/* RESIZE FIX */
window.addEventListener("resize", () => {
  cardWidth = track.children[0].offsetWidth + 40;
  track.style.transition = "none";
  track.style.transform = `translateX(-${index * cardWidth}px)`;
});

}

initSlider();
