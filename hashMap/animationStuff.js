function drawCanvas(canvas, hashMap) {
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
      dataCircle.classList.add("data", "circle");
      dataCircle.textContent = `{${linkedList.at(j).data.key} : ${
        linkedList.at(j).data.value
      }}`;
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
