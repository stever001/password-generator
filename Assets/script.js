// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character sets for password generation
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Function to generate a random password
function generatePassword() {
  var length = prompt("Enter the length of the password (between 8 and 128 characters):");

  if (length === null) {
    return null; // User cancelled the input
  }

  length = parseInt(length);

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return null;
  }

  var useLowercase = confirm("Include lowercase characters?");
  var useUppercase = confirm("Include uppercase characters?");
  var useNumbers = confirm("Include numeric characters?");
  var useSpecialChars = confirm("Include special characters?");

  if (!useLowercase && !useUppercase && !useNumbers && !useSpecialChars) {
    alert("Please select at least one character type for the password.");
    return null;
  }

  var allowedChars = "";
  if (useLowercase) {
    allowedChars += lowercaseChars;
  }
  if (useUppercase) {
    allowedChars += uppercaseChars;
  }
  if (useNumbers) {
    allowedChars += numberChars;
  }
  if (useSpecialChars) {
    allowedChars += specialChars;
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars.charAt(randomIndex);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);