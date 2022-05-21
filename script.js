// Assignment code here
function generatePassword() {

  var passwordLength = prompt("Enter password length, must be between 8 and 128")
  if (passwordLength < 8 || passwordLength > 128) {
    alert("invalid password length")
    return ""
  }

  var lowerCase = confirm("would you like to include lowercase?")
  var upperCase = confirm("would you like to include uppercase?")
  var numbers = confirm("would you like to include numbers?")
  var specialCharacter = confirm("would you like to include special character?")

  if (lowerCase || upperCase || numbers || specialCharacter) {
    
  } else {
    alert("invalid character")
    return ""
  }

  
  var charSet = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwyz",
    numbers:  "0123456789",
    specialCharacter:"!@#$%^&*()_-+=",
  };
  
  var passwordSearch = ""
  if (lowerCase === true) {
    passwordSearch = passwordSearch + charSet.lowerCase
  }

  if (upperCase === true) {
    passwordSearch = passwordSearch + charSet.upperCase
  }

  if (numbers === true) {
    passwordSearch = passwordSearch + charSet.numbers
  }

  if (specialCharacter === true) {
    passwordSearch = passwordSearch + charSet.specialCharacter
  }

  var password = ""
  for (var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * passwordSearch.length)
    password = password + passwordSearch[index]
  }

  return password
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
