// Assignment Code
var generateBtn = document.querySelector("#generate");

// button action
generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  console.log("writePassword");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Prompts quantity and type of characters
function generatePassword() {
  var passwordLength = prompt(
    "Please enter the number of characters you want for your password. Choose a length of at least 8 characters and less the 128."
  );
  var upperCases = confirm("Do you want uppercases in your password?");
  var lowerCases = confirm("Do you want lowercases in your password?");
  var numbers = confirm("Do you want numbers in your password?");
  var specialCharacters = confirm(
    "Do you want special characters in your password?"
  );
  console.log(generatePassword);

  //minimum count of characters
  var minimumCount = 0;

  // empty mimimum of characters
  var minimumUpperCases = "";
  var minimumLowerCases = "";
  var minimumNumbers = "";
  var minimumSpecialCharacters = "";

  // Generator functions**

  var functionArray = {
    getUpperCases: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getLowerCases: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getNumbers: function () {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getSpecialCharacters: function () {
      //return  specialCharacters( Math.floor(Math.random() * specialCharacters.length)
      return String.fromCharCode(Math.floor(Math.random() * 12 + 33)); 
    
    },
  };

  // Checks to make sure user selected ok for all and uses empty minimums from above

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases(0);
    minimumCount++;
  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases(1);
    minimumCount++;
  }

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers(2);
    minimumCount++;
  }

  if (specialCharacters === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters(3);
    minimumCount++;
  }

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";

  //loop getting random characters
  for (let i = 0; i < parseInt(passwordLength) - minimumCount; i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += functionArray[randomNumberPicked];
  }
  // insure characters are added to password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;

  return randomPasswordGenerated;
}
console.log("randomPasswordGenerated");
