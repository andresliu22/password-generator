// Assignment Code
var generateBtn = document.querySelector("#generate");

// All variables that would be answered by the user
var passLength = "";
var lowercaseBool = false;
var uppercaseBool = false;
var numericBool = false;
var specialBool = false;

// All characters sets
var lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseSet = lowercaseSet.toUpperCase();
var numericSet = "0123456789";
var specialSet = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

var validationSet = [...lowercaseSet, ...uppercaseSet, ...specialSet]

// Write password to the #password input
function writePassword() {

  // Reset previous choices
  resetPassword() 

  // Loop until user chooses a number between 8 to 128
  while (passLength < 8 || passLength > 128 || isNaN(passLength) || passLength.includes(validationSet)){
    passLength = prompt("Choose a password between 8 to 128 characters:");

    // If not pop an alert
    if (passLength < 8 || passLength > 128 || isNaN(passLength) || passLength.includes(validationSet)) {
      alert("Please choose a number between 8 to 128");
    }
  }

  // Loop until the user confirms at least one of the options
  while (!lowercaseBool && !uppercaseBool && !numericBool && !specialBool) {
    lowercaseBool = confirm("Would you like to include lowercase characters?");
    uppercaseBool = confirm("Would you like to include uppercase characters?");
    numericBool = confirm("Would you like to include numbers?");
    specialBool = confirm("Would you like to include special characters?");
    
    // If not pop an alert
    if (!lowercaseBool && !uppercaseBool && !numericBool && !specialBool) {
      alert("You need to choose at least one of the options");
    }
  }
    
  // Change to true so next time the button is clicked,
  // it doesnt ask all the question again and generate password
  // with the answers given before

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  
  var newPassword = "";
  var charSet = "";

  // Concatenate strings for each confirmed set
  if (lowercaseBool) {
    charSet = charSet.concat(lowercaseSet);
  }
  if (uppercaseBool) {
    charSet = charSet.concat(uppercaseSet);
  }
  if (numericBool) {
    charSet = charSet.concat(numericSet);
  }
  if (specialBool) {
    charSet = charSet.concat(specialSet);
  }

  // Loop to add to the new password any character that was confirmed
  // until the length of the password entered is reached
  for (var i = 0; i < passLength; i++) {
    newPassword += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  // Return new password
  return newPassword;
}

// Function to reset all values
function resetPassword() {
  passLength = "";
  lowercaseBool = false;
  uppercaseBool = false;
  numericBool = false;
  specialBool = false;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
