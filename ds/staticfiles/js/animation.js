const text = [
  "Array", "Stack", "Queue", "LinkedList", "Tree", "Graph", "Hash", "Heap", 
  "Trie", "SkipList", "SegmentTree", "FenwickTree", "BinaryIndexedTree", 
  "SuffixArray", "SuffixTree", "BTree", "RedBlackTree", "AVLTree", "KDTree", 
  "DisjointSet", "BinarySearch", "BFS", "DFS", "TopologicalSort", "Kruskal", 
  "Prim", "Dijkstra", "BellmanFord", "FloydWarshall", "MaxFlow", "MinCut"
];

const code = document.getElementById("text");
const logo = document.getElementById("logo");
const poweredBy = document.getElementById("powered-by");

let animationIndex = 0;
let charIndex = 0;
let currentText = "";
var out = 0;
function typeWriter() {
  if (animationIndex < text.length) {
      if (charIndex === text[animationIndex].length) {
          // Add completed word to the text and prepare for the next one
          currentText += text[animationIndex] + "\n";
          animationIndex++;
          charIndex = 0;

          // After completing a word, clear the text and wait for the next one
          setTimeout(() => {
              currentText = ''; // Clear previous text
              code.innerText = `{ ${currentText}| }`; // Keep cursor blinking
          }, 500); // Wait for 500ms before clearing the text
      }

      // Show current text with the typewriter effect
      code.innerText = `{ ${currentText}${text[animationIndex]?.substring(0, charIndex + 1)}| }`;
      charIndex++;
  }

  if (animationIndex === text.length) {
      // When all text is done, rotate the element after typewriter effect
      code.classList.add("rotate");
      setTimeout(showLogo, 2000); // Delay for rotation
  }
}

// Display "VS" and full name "Visual Struct"
function showLogo() {
  code.style.display = "none";
  logo.innerHTML = "<span>VS</span>";
    
      logo.innerHTML = "<span>Visual Struct</span>";
      logo.style.opacity = 1;
      showPoweredBy();
     
}

// Display "Powered by FusionNet" with flying effect
function showPoweredBy() {
  out = 1;
  poweredBy.classList.add("fly");
}
document.write(out);
// Start the typewriter effect
setInterval(typeWriter, 100);





