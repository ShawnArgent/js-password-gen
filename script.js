var generateBtn = document.querySelector("#generate");

// Special characters for the function created
const specialChars = "!@#$%^&*()";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompts that come up after you click generate password

function generatePassword() {
  var length = prompt("How many characters in your password? Must be at least 8.");
  if(isNaN(length)){
    alert("You must input a number!");
    return generatePassword()
  }
  if(length<8 || length> 128){
    alert("Please choose numbers between 8 - 128!");
    return generatePassword()
  }
  var numbers = confirm("Include numbers?");

  var lowerCase = confirm("Include upper case letters?");

  var upperCase = confirm("Include lower case letters?");

  var specialChars = confirm("Include special characters?");

  if(!hasUpper&&!hasLower&&!hasNumbers&&!hasSpecial){
    alert("You must at least choose 1 character type!");
    return generatePassword()
  }

  if(hasupperCase){
    specialChars += upperCase
  }
  if(haslowerCase){
    specialChars += lowerCase
  }

  if(hasnumbers) {
    specialChars += numbers
  }

  if(hasspecialChars) {
    specialChars += specialChars
  }

for (var i = 0; i < length; i++) {
  password += specialChars[Math.floor(Math.random() * specialChars.length)];
}
return password;
}