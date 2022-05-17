// Assignment Code
var generateBtn = document.querySelector("#generate");


//Arrays of Possible Character Choices
var numbers = ("0123456789");
var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
var special = ("!#$^%()*+,./:;<=>?@^_`{|}~");


// Created function to  user which options and made conditional statements to ensure minimum option requirements were met.
function questions() {
  var isValid = false;
  do {
    var length = prompt("Choose password length between 8 and 128 characters");
    var Numbers = confirm("Include numbers?");
    var LowerCase = confirm("Include lower case letters?");
    var UpperCase = confirm("Include upper case letters?");
    var Special = confirm("Include special characters?");
    var responses = {
      length: length,
      Numbers: Numbers,
      LowerCase: LowerCase,
      UpperCase: UpperCase,
      Special: Special
    } 
    if((length < 8)||(length > 128))
    alert("Choose number between 8 and 128");
    else if((!Numbers)&&(!LowerCase)&&(!UpperCase)&&(!Special))
    alert("Must choose at least one type.");
    else
    isValid = true;

  } while(!isValid);
  return responses;
}
// This function joins all the user responses and then creates the result - a strong password.
function generatePassword() {
  var passwordQuestions = questions();
  var allPossible = [];
  var randomPassword = "";

  if (passwordQuestions.Numbers) {
    for (var i of numbers)
      allPossible.push(i);
  }
  if (passwordQuestions.LowerCase) {
    for (var i of lowerCase)
      allPossible.push(i);
  }
  if (passwordQuestions.UpperCase) {
    for (var i of upperCase)
      allPossible.push(i);
  }
  if (passwordQuestions.Special) {
    for (var i of special)
      allPossible.push(i);
  }

  console.log(allPossible);

  for (var i = 0; i < passwordQuestions.length; i++) {
    randomPassword += allPossible[Math.floor(Math.random() * allPossible.length)];
  }
  console.log(randomPassword);

  return randomPassword;
}

// Add event listener to generate button
var copy = document.querySelector("#copy");
generateBtn.addEventListener("click", copyrandomPassword);  {
  copyrandomPassword();
}

// Write password to the #password input
function copyrandomPassword() {
  var randomPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = randomPassword;
}