0) setup repo and commit starter code and deploy
1) prompt for password length
2) generate pw all "a"'s for the desired length
3) display all random lowercase letters for the chose length
4) display all random uppercase/lowercase letters
5) let user choose to include uppercase and/or lowercase
6) let user choose upper, lower, and/or numbers
7) let user choose upper, lower, numbers, and/or specials
8) prevent user from too short
9) prevent user from too short or too long
10) prevent user from choosing no character types

var letters = "abcdefghijklmnopqrstuvwxyz";

function generateWord() {
  var length = prompt("Enter the length");
  var word = "";
  for (var i = 0; i < length; i++) {
    word = word + letters[Math.floor(Math.random() * letters.length)];
  }
  document.querySelector("#output").textContent = word;
}

generateWord();