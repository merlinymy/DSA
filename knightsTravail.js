function knightMoves(start, end) {
  // input start and end are arrays representing 2d coordinates
  // [0,0], [7,7]
  //game board is 8x8
  // use bfs to search for shortest route
  let moves = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];
  let queue = [{ pos: start, path: [start] }];
  while (queue.length > 0) {
    let curSquare = queue.shift();
    let curPos = curSquare.pos;
    let curPath = curSquare.path;
    for (let move of moves) {
      let nextX = curPos[0] + move[0];
      let nextY = curPos[1] + move[1];
      if (nextX === end[0] && nextY === end[1]) {
        curPath.push(end);
        handleResult(curPath);
        return;
      }
      if (nextX >= 0 && nextX <= 7 && nextY >= 0 && nextY <= 7) {
        let nextPos = [curPos[0] + move[0], curPos[1] + move[1]];
        let nextPath = [...curPath, nextPos];
        queue.push({ pos: nextPos, path: nextPath });
      }
    }
  }
  return -1;
}

function handleResult(path) {
  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  for (let arr of path) {
    console.log(`[${arr.join(",")}]`);
  }
}
