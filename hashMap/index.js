const inputKey = document.querySelector("#key");
const inputValue = document.querySelector("#value");

const setBtn = document.querySelector("button.set");
const entriesBtn = document.querySelector("button.entries");
const getBtn = document.querySelector("button.get");
const hasBtn = document.querySelector("button.has");
const removeBtn = document.querySelector("button.remove");
const lengthbtn = document.querySelector("button.length");
const clearBtn = document.querySelector("button.clear");
const keysBtn = document.querySelector("button.keys");
const valuesBtn = document.querySelector("button.values");

let hashMap = new HashMap();
const canvas = document.querySelector("div.canvas");

drawCanvas(hashMap);

setBtn.addEventListener("click", () => {
  if (!inputKey.value || !inputValue.value) {
    alert("please provide values for Key and Value");
  }
  hashMap.set(inputKey.value, inputValue.value);
  log(`added key value pair {${(inputKey.value, inputValue.value)}}`);
  log(
    `hashMap's size is ${hashMap.size}, hashMap's capacity is ${hashMap.capacity}`
  );
  drawCanvas(hashMap);
});

entriesBtn.addEventListener("click", () => {
  hashMap.entries();
});

getBtn.addEventListener("click", () => {
  if (!inputKey.value) {
    alert("please provide values for Key");
  }
  hashMap.get(inputKey.value);
  highlight(inputKey.value);
});

hasBtn.addEventListener("click", () => {
  if (!inputKey.value) {
    alert("please provide values for Key");
  }
  hashMap.has(inputKey.value);
  highlight(inputKey.value);
});

removeBtn.addEventListener("click", () => {
  if (!inputKey.value) {
    alert("please provide values for Key");
  }
  hashMap.remove(inputKey.value);
  drawCanvas(hashMap);
});

lengthbtn.addEventListener("click", () => {
  const length = hashMap.length();
  log(`${length} stored keys`);
});

clearBtn.addEventListener("click", () => {
  hashMap.clear();
  hashMap = new HashMap();
  drawCanvas(hashMap);
  log("removes all entries in the hash map.");
});

keysBtn.addEventListener("click", () => {
  hashMap.keys();
});

valuesBtn.addEventListener("click", () => {
  hashMap.values();
});
