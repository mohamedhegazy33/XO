let titleGame = document.querySelector(".title__game");
let player = "x";
let gameBlock = [];
let relodBtn = document.querySelector(".relodBtn");

relodBtn.addEventListener("click", function () {
  location.reload();
});

function play(id) {
  // if x role and must block is empty
  let Block = document.getElementById(id);
  if (player === "x" && Block.innerHTML == "") {
    Block.innerHTML = "X";
    player = "o";
    titleGame.innerHTML = "O Role";
  } else if (player === "o" && Block.innerHTML == "") {
    Block.innerHTML = "O";
    player = "x";
    titleGame.innerHTML = "X Role";
  }
  endGame();
}

function endGame() {
  for (let i = 1; i < 10; i++) {
    gameBlock[i] = document.getElementById("block" + i).innerHTML;
  }
  if (
    gameBlock[1] == gameBlock[2] &&
    gameBlock[2] == gameBlock[3] &&
    gameBlock[3] != ""
  ) {
    console.log("done");
    result(1, 2, 3);
  } else if (
    gameBlock[4] == gameBlock[5] &&
    gameBlock[5] == gameBlock[6] &&
    gameBlock[6] != ""
  ) {
    console.log("done");
    result(4, 5, 6);
  } else if (
    gameBlock[7] == gameBlock[8] &&
    gameBlock[8] == gameBlock[9] &&
    gameBlock[9] != ""
  ) {
    console.log("done");
    result(7, 8, 9);
  } else if (
    gameBlock[1] == gameBlock[4] &&
    gameBlock[4] == gameBlock[7] &&
    gameBlock[7] != ""
  ) {
    console.log("done");
    result(1, 4, 7);
  } else if (
    gameBlock[2] == gameBlock[5] &&
    gameBlock[5] == gameBlock[8] &&
    gameBlock[8] != ""
  ) {
    console.log("done");
    result(2, 5, 8);
  } else if (
    gameBlock[3] == gameBlock[6] &&
    gameBlock[6] == gameBlock[9] &&
    gameBlock[9] != ""
  ) {
    console.log("done");
    result(3, 6, 9);
  } else if (
    gameBlock[1] == gameBlock[5] &&
    gameBlock[5] == gameBlock[9] &&
    gameBlock[9] != ""
  ) {
    console.log("done");
    result(1, 5, 9);
  } else if (
    gameBlock[3] == gameBlock[5] &&
    gameBlock[5] == gameBlock[7] &&
    gameBlock[7] != ""
  ) {
    console.log("done");
    result(3, 5, 7);
  } else {
    function relod() {
      relodBtn.style.display = "block";
    }
  }
  relod();
}

function result(num1, num2, num3) {
  titleGame.innerHTML = ` Winner is ${gameBlock[num1]} `;
  document.getElementById("block" + num1).style.background = "#0b1d30";
  document.getElementById("block" + num2).style.background = "#0b1d30";
  document.getElementById("block" + num3).style.background = "#0b1d30";
  setInterval(function () {
    titleGame.innerHTML += ".";
  }, 1000);
  setTimeout(() => {
    location.reload();
  }, 5000);
}
