let btnref = document.querySelectorAll(".button-option");
let div2ref = document.querySelector(".div2");
let newgamebtn = document.getElementById("new-game");
let restartbtn = document.getElementById("restart");
let msgref = document.getElementById("message");
//Winning Pattern Array
let winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];
//Player 'X' plays first
let xturn = true;
let count = 0;

//Disable All Buttons
const disablebuttons = () => {
  btnref.forEach((element) => (element.disabled = true));
  //enable popup
  div2ref.classList.remove("div");
};

//Enable all buttons (For New Game and Restart)
const enablebuttons = () => {
  btnref.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  //disable popup
  div2ref.classList.add("div");
};

//This function is executed when a player wins
const winfunction = (letter) => {
  disablebuttons();
  if (letter == "X") {
    msgref.innerHTML = "&#x1F389; <br> 'X' Wins";
  } else {
    msgref.innerHTML = "&#x1F389; <br> 'O' Wins";
  }
};

//Function for draw
const drawfunction = () => {
  disablebuttons();
  msgref.innerHTML = "&#x1F60E; <br> It's a Draw";
};

//New Game
newgamebtn.addEventListener("click", () => {
  count = 0;
  enablebuttons();
});
restartbtn.addEventListener("click", () => {
  count = 0;
  enablebuttons();
});

//Win Logic
const winchecker = () => {
  //Loop through all win patterns
  for (let i of winpattern) {
    let [element1, element2, element3] = [
      btnref[i[0]].innerText,
      btnref[i[1]].innerText,
      btnref[i[2]].innerText,
    ];
    //Check if elements are filled
    //If 3 empty elements are same and would give win as would
    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        //If all 3 buttons have same values then pass the value to winFunction
        winfunction(element1);
      }
    }
  }
};

//Display X/O on click
btnref.forEach((element) => {
  element.addEventListener("click", () => {
    if (xturn) {
      xturn = false;
      //Display X
      element.innerText = "X";
      element.disabled = true;
    } else {
      xturn = true;
      //Display Y
      element.innerText = "O";
      element.disabled = true;
    }
    //Increment count on each click
    count += 1;
    if (count == 9) {
      drawfunction();
    }
    //Check for win on every click
    winchecker();
  });
});
//Enable Buttons and disable popup on page load
window.onload = enablebuttons;