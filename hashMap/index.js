const inputKey = document.querySelector("#key");
const inputValue = document.querySelector("#value");

const setBtn = document.querySelector("button.set");

const hashMap = new HashMap();
const canvas = document.querySelector("div.canvas");

drawCanvas(canvas, hashMap);

setBtn.addEventListener("click", () => {
  if (!inputKey.value || !inputValue.value) {
    alert("please provide values for Key and Value");
  }
  hashMap.set(inputKey.value, inputValue.value);
  log(`added key value pair {${(inputKey.value, inputValue.value)}}`);
  log(
    `hashMap's size is ${hashMap.size}, hashMap's capacity is ${hashMap.capacity}`
  );
  drawCanvas(canvas, hashMap);
});
