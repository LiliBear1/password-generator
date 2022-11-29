// !!! KEEP IT SIMPLE !!!

// STEP 1 - I want to consider all my posible variables
// (use ctrl+J on mac to bring onto one line)

// Array of special characters to be included in password
var specialCharacters = [
  "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
];

// step 2 - Adding all the choices together
//   * Character types
//       * Lowercase
//       * Uppercase
//       * Numeric
//       * Special characters ($@%&*, etc)

var pwdChoices = {
  'Lowercase Characters': lowerCasedCharacters,
  'Uppercase Characters': upperCasedCharacters,
  'Numeric Characters': numericCharacters,
  'Special Characters': specialCharacters,
};

// Therefore password considerations
// Length
var pwdLength; 
// Character array
var charArray = [];
// Array created from user selection of length and characters
var pwdArray = [];
// String conversion
var pwdString = "";

// STEP 3 - Create password object
var password = { pwdLength, charArray, pwdString };

// Function to prompt user for password options
function getPasswordOptions(checkLength, confirmTypes) {
  checkLength();
  confirmTypes(pwdChoices);

  return password;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

// Function to generate password with user input
function generatePassword(arr, length, getRandom) {
  var i = 0;

  while (i < length) {
    i++;
    pwdArray.push(getRandom(arr));
  }
  return arrString();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // // This bit calls the generatePassword function
  // var password = generatePassword();
  // This bit gives the password an ID - I think
  var passwordText = document.querySelector("#password");
  // This bit updates the text box - I think
  passwordText.value = password.pwdString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", summoner);
// replaced writePassword with summoner for prompts below

//  * Code should validate for each input and at least one character type should be selected

// CHECK LENGTH and leave 10 in so user has min option ready
function checkLength() {
  password.pwdLength = parseInt(
    prompt(
      "State your password length, it must be between 10 and 64 characters",
      10
    )
  );

  // Check password is a number and not less than 10 or more than 64

  if (typeof password.pwdLength === "number") {
      if (password.pwdLength < 10 || password.pwdLength > 64) {
        alert("Password must be between 10 and 64 characters");
        password.pwdLength = parseInt(
          prompt(
            "State your password length, it must be between 10 and 64 characters",
          10
        )
      );
      return password.pwdLength;
    } else if (password.pwdLength >= 10 && password.pwdLength <= 64) {
      return password.pwdLength;
    }
  }
}

// // Call function to show prompts for password generator criteria
// showPrompts();

// Function to push characters into the array
// Present a series of prompts for password criteria
function confirmTypes() {
for (const type in pwdChoices) {
      const addType = confirm('Would you like to include ' + type);
  if (addType === true) {
    charArray.push(...pwdChoices[type]);
    
  }
}
  return password["charArray"];
}

// Function to convert pwdArray to a string
function arrString() {
  for (var i = 0; i < pwdArray.length; i++) {
    var character = pwdArray[i];
    password.pwdString += character;
  }
  return password.pwdString;
}
// Function to call other functions
function summoner() {
  getPasswordOptions(checkLength, confirmTypes);
  getRandom(password.charArray);
  generatePassword(password.charArray, password.pwdLength, getRandom);
  writePassword();
}

//   * Once prompts are answered then the password should be generated and displayed in an alert or written to the page

// * Generate a password when the button is clicked




// possible selections:

// pw  containing : Lowercase,Uppercase, Numeric,Special characters
// pw  containing : Lowercase,Uppercase,Numeric
// pw  containing : Lowercase,Uppercase
// pw  containing : Lowercase
// pw  containing : Uppercase
// pw  containing : Numeric
// pw  containing : Special characters

// pw  containing : Lowercase,Numeric,Special characters
// pw  containing : Lowercase,Numeric
// pw  containing : Lowercase,Special characters

// pw  containing : Uppercase,Numeric,Special characters
// pw  containing : Uppercase,Numeric
// pw  containing : Uppercase,Special characters

// pw  containing : Numeric,Special characters

// pw  containing : no selection (all Cancel --- random pw generate by the COMPUTER)
