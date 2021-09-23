// Assignment Code
var generateBtn = document.querySelector("#generate");

// All variables that would be answered by the user
var passLength = 0;
var lowercaseBool = false;
var uppercaseBool = false;
var numericBool = false;
var specialBool = false;

// All characters sets
var lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseSet = lowercaseSet.toUpperCase();
var numericSet = "0123456789";
var specialSet = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Write password to the #password input
function writePassword() {



  // Loop until user chooses a number between 8 to 128
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    passLength = parseInt(prompt("Choose a password between 8 to 128 characters:"));

    // If not pop an alert
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
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



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
