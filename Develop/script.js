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



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
