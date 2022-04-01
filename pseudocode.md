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

let abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let abcLower = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let specialChars = "!#$^%()*+,./:;<=>?@^_`{|}~";
let includeNumber = false;
let IncludeLower = true;
let includeUpper = true;
let includeSpecial = false;
let length = 8;

function generateWord() {
  var length = prompt("Enter the length");
  var word = "";
  for (var i = 0; i < length; i++) {
    word = word + letters[Math.floor(Math.random() * letters.length)];
  }
  document.querySelector("#output").textContent = word;
}

generateWord();

create variables 
let lowercase = string letters "abcdefghijklmnopqrstuvwxyz"
let uppercase string letters
let numbers = string digits
let specialChars = #$&@!*
let candidates = ""
let includeLower
let includeUpper
let includeSpecial
let includeNumber 

if length < 8 or lenth > 128 
alert "Password should be from 8 to 128 characters long
end if

includeLower = prompt 
if includeLower = true
add lowerccase to candidates
Use lowercase letters?"
ask if user wants to use lowercase
if user selects lowercase
add lowercase to candidates 
end if 

includeUpper = prompt "Use uppercase letters?"
IF includeUpper = true
   add uppercase to candidates
   letter = random char from uppercase
   password = password + letter
END IF

includeSpecial = prompt "Use special characters?"
IF includeSpecial = true
   add specialChars to candidates
   letter = random char from special
   password = password + letter
END IF

includeNumbers = prompt "Use numbers?"
IF includeNumbers = true
   add numbers to candidates
   letter = random char from numbers
   password = password + letter
END IF

IF candidates.length === 0
    alert "You must choose at least one character type."
    RETURN ""
END IF

WHILE password.length < length
    letter = random char from candidates
    add letter to password
END WHILE

RETURN password



