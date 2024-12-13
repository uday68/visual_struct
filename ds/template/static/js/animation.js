
const textArray = [
  "Array", "Stack", "Queue", "LinkedList", "Tree", "Graph", "Hash", "Heap", 
  "Trie", "SkipList", "SegmentTree", "FenwickTree"
];

const slotContent = document.getElementById("slot-content");

// Duplicate content to extend the scroll duration
function populateSlot() {
  let repeatedContent = [];
  for (let i = 0; i < 10; i++) { // Repeat the list 10 times for longer spin
    repeatedContent = repeatedContent.concat(textArray);
  }
  slotContent.innerHTML = repeatedContent.map(text => `<div>${text}</div>`).join("");
}

// Reveal Visual Struct and Brace Animations
function runAnimations() {
  const leftBrace = document.getElementById("left-brace");
  const rightBrace = document.getElementById("right-brace");
  const visualStruct = document.getElementById("visual-struct");
  const poweredBy = document.getElementById("powered-by");

  setTimeout(() => {
    leftBrace.classList.add("flip");
    rightBrace.classList.add("flip");

    // Reveal "Visual Struct" after spin
    setTimeout(() => {
      visualStruct.style.opacity = "1";
      visualStruct.style.transform = "scale(1)";
    }, 1000);

    // Show "Powered by FusionNeat"
    setTimeout(() => {
      poweredBy.style.opacity = "1";
      poweredBy.style.transform = "translateY(0)";
    }, 2000);
  }, 15000); // Wait for spin duration
}

populateSlot();
runAnimations();
