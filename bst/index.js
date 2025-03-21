let tree = new Tree([42, 12, 34, 2, 3, 56, 47]);
const arrayInput = document.querySelector("#array-input");
const drawingArea = document.querySelector(".graph");
const treeStruct = document.createElement("div");
treeStruct.classList.add("tree-visual");

const insertInput = document.querySelector("#insert");
const insertButton = document.querySelector("button.insert");
insertButton.addEventListener("click", () => {
  let val = insertInput.value;
  if (val) {
    tree.insert(val);
    drawTree(tree);
  }
});

const deleteInput = document.querySelector("#delete");
const deleteButton = document.querySelector("button.delete");
deleteButton.addEventListener("click", () => {
  let val = deleteInput.value;
  if (val) {
    tree.delete(val);
    drawTree(tree);
  }
});

arrayInput.addEventListener("input", (event) => {
  event.target.value = event.target.value.replace(/[^\d\s]/g, "");
  let val = event.target.value.replace(/[^\d\s]/g, "").trim();
  let array;
  if (val !== " " && val !== "") {
    array = val.split(" ");
  }
  tree = new Tree(array);
  drawTree(tree);
});

function drawTree(tree) {
  treeStruct.innerHTML = "";

  drawPretty(tree.root);
  drawingArea.append(treeStruct);
}

function drawPretty(node, prefix = "", isLeft = true) {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    drawPretty(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  const branch = document.createElement("div");
  branch.textContent = `${prefix}${isLeft ? "└── " : "┌── "}${node.data}`;
  treeStruct.append(branch);
  if (node.left !== null) {
    drawPretty(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}

drawTree(tree);
