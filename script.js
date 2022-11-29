// !!! KEEP IT SIMPLE !!!

// STEP 1 - I want to consider all my posible variables

// * Length of password : between 10 characters but no more than 64.

// (use ctrl+J on mac to bring onto one line)

// Array of special characters to be included in password 
var specialCharacters = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// Adding all the choices together  
//   * Character types
//       * Lowercase
//       * Uppercase
//       * Numeric
//       * Special characters ($@%&*, etc)

var pwdChoices = {
  'l': lowerCasedCharacters,
  'u': upperCasedCharacters,
  'n': numericCharacters,
  's': specialCharacters
};

// Function to prompt user for password options
function getPasswordOptions(checkLength, confirmTypes) {
  checkLength();
  confirmTypes(charTypes);
  
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
    passwordArray.push(getRandom(arr));

  }
  return arrString();
  
}

// Get references to the #generate element 
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  // This bit calls the generatePassword function 
  var password = generatePassword();
    // This bit gives the password an ID - I think
  var passwordText = document.querySelector('#password');
// This bit updates the text box - I think
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



 




  
  // var l = prompt('Do you want Lowercase?');
  // var u = prompt('Do you want Uppercase?');
  // var n = prompt('Do you want a Numeric?');
  // var s = prompt('Do you want a Special characters?');
  // return [l,u,n,s];

}
// console.log(generatePassword)





//  * Code should validate for each input and at least one character type should be selected

//   * Once prompts are answered then the password should be generated and displayed in an alert or written to the page

// * Present a series of prompts for password criteria 

prompt('Do you want a new random password?')
prompt('Your password length will be between 10 to 64 characters')
// prompt ('Do you want Uppercase?')
// prompt ('Do you want Lowercase?')
// prompt ('Do you want a Numeric?')
// prompt ('Do you want a Special characters?')

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