// Assignment Code
var generateBtn = document.querySelector("#generate");


//Arrays of Possible Character Choices
var numbers = ("0123456789");
var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
var special = ("!#$^%()*+,./:;<=>?@^_`{|}~");


// Created function to ask user which options and made conditional statements to ensure minimum option requirements were met.
function questions() {
  var isValid = false;
  do {
    var length = prompt("Choose password length between 8 and 128 characters");
    var askNumbers = confirm("Do you want your password to include numbers?");
    var askLowerCase = confirm("Do you want your password to include lower case letters?");
    var askUpperCase = confirm("Do you want your password to include upper case letters?");
    var askSpecial = confirm("Do you want your password to include special characters?");
    var responses = {
      length: length,
      askNumbers: askNumbers,
      askLowerCase: askLowerCase,
      askUpperCase: askUpperCase,
      askSpecial: askSpecial
    } 
    if((length < 8)||(length > 128))
    alert("Choose number between 8 and 128");
    else if((!askNumbers)&&(!askLowerCase)&&(!askUpperCase)&&(!askSpecial))
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

  if (passwordQuestions.askNumbers) {
    for (var i of numbers)
      allPossible.push(i);
  }
  if (passwordQuestions.askLowerCase) {
    for (var i of lowerCase)
      allPossible.push(i);
  }
  if (passwordQuestions.askUpperCase) {
    for (var i of upperCase)
      allPossible.push(i);
  }
  if (passwordQuestions.askSpecial) {
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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
