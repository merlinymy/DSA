function drawCanvas(hashMap) {
  const bucketsDiv = document.querySelector(".buckets");
  bucketsDiv.innerHTML = "";
  capacity = hashMap.capacity;
  for (let i = 0; i < capacity; i++) {
    bucketWrap = drawSquare(i);
    const linkedList = hashMap.buckets[i];
    for (let j = 0; j < linkedList.size; j++) {
      const line = document.createElement("div");
      line.classList.add("line");
      bucketWrap.append(line);
      const dataCircle = document.createElement("div");
      const key = linkedList.at(j).data.key;
      const val = linkedList.at(j).data.value;
      dataCircle.classList.add("data", "circle", `key-${key}`);
      dataCircle.textContent = `{${key} : ${val}}`;
      bucketWrap.append(dataCircle);
    }
  }
}

function drawSquare(i) {
  const bucketsDiv = document.querySelector(".buckets");
  const bucketWrap = document.createElement("div");
  bucketWrap.classList.add("bucket-wrap");
  bucketsDiv.append(bucketWrap);

  const bucket = document.createElement("div");
  bucket.classList.add("bucket");
  bucket.textContent = i;

  bucketWrap.append(bucket);
  return bucketWrap;
}

function highlight(key) {
  const allData = document.querySelectorAll(".data");
  const selected = document.querySelector(`.key-${key}`);
  allData.forEach((div) => {
    div.classList.remove("highlight");
  });
  if (selected) {
    selected.classList.add("highlight");
  }
}
