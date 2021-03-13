

// Assignment Code

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var passwordLength;
var uppercaseCheck;
var lowercaseCheck;
var numberCheck;
var specialCheck;
var characters;
var finalpassword;
var tempcharacter;
var password;


// Data Validation

// Determine password length. Ask the user how long they want their password to be
// making sure that they stay within 8 and 128 characters

function determineLength() {
  var passwordLength = prompt("Enter password length. Min 8 characters and max 128 characters");

  if (passwordLength < 8) {
    alert("Password length must be a number between 8-128 characters");
    determineLength();
  } else if (passwordLength > 128) {
    alert("Password length must be a number between 8-128 characters");
    determineLength();
  } else if (isNaN(passwordLength)) {
    alert("Password length must be a number between 8-128 characters");
    determineLength();
  }
  return passwordLength;


}
// Determine uppercase letters. Ask the user if they want to include uppercase letters in their password.

function determineUppercase() {
  var uppercaseCheck = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
  uppercaseCheck = uppercaseCheck.toLowerCase();

  if (uppercaseCheck === null || uppercaseCheck === "") {
    alert("Please answer Yes or No");
    determineUppercase();
  } else if (uppercaseCheck === "yes" || uppercaseCheck === "y") {
    uppercaseCheck = true;
  } else if (uppercaseCheck === "no" || uppercaseCheck === "n") {
    uppercaseCheck = false;
  } else {
    alert("Please answer Yes or No");
    determineUppercase();
  }

  return uppercaseCheck;
}


// Determine lowercase letters. Ask the user if they want to include lowercase letters in their password.

function determineLowercase() {
  var lowercaseCheck = prompt("Do you want to include lowercase letters in your password? \n(Yes or No)");
  lowercaseCheck = lowercaseCheck.toLowerCase();

  if (lowercaseCheck === null || lowercaseCheck === "") {
    alert("Please answer Yes or No");
    determineLowercase();
  } else if (lowercaseCheck === "yes" || lowercaseCheck === "y") {
    lowercaseCheck = true;
  } else if (lowercaseCheck === "no" || lowercaseCheck === "n") {
    lowercaseCheck = false;
  } else {
    alert("Please answer Yes or No");
    determineLowercase();
  }

  return lowercaseCheck;
}

// Determine numbers. Ask the user if they want to include numbers in their password.

function determineNumbers() {
  var numberCheck = prompt("Do you want to include numbers in your password? \n(Yes or No)");
  numberCheck = numberCheck.toLowerCase();
 
  if (numberCheck === null || numberCheck === "") {
    alert("Please answer Yes or No");
    determineNumbers();
  } else if (numberCheck === "yes" || numberCheck === "y") {
    numberCheck = true;
  } else if (numberCheck === "no" || numberCheck === "n") {
    numberCheck = false;
  } else {
    alert("Please answer Yes or No");
    determineNumbers();
  }

  return numberCheck;
}


// Determine special characters. Ask the user if they want to include special characters in their password.

function determineSpecial() {
  var specialCheck = prompt("Do you want to include special characters in your password? \n(Yes or No)");
  specialCheck = specialCheck.toLowerCase();

  if (specialCheck === null || specialCheck === "") {
    alert("Please answer Yes or No");
    determineSpecial();
  } else if (specialCheck === "yes" || specialCheck === "y") {
    specialCheck = true;
  } else if (specialCheck === "no" || specialCheck === "n") {
    specialCheck = false;
  } else {
    alert("Please answer Yes or No");
    determineSpecial();
  }

  return specialCheck;
}




// Run the function 'generatePassword' in order to run through the above functions to validate data.
// The function will then generate the password.

function generatePassword() {


  var passwordLength = determineLength();

  var lowercaseCheck = determineLowercase();

  var uppercaseCheck = determineUppercase();

  var numberCheck = determineNumbers();

  var specialCheck = determineSpecial();

  console.log(passwordLength, lowercaseCheck, uppercaseCheck, specialCheck);

  // Asssign the variable 'characters' to an empty accumulator string in order to 
  // store the returned characters of (uppercase, lowercase, numbers, and special characters).

  var characters = "";

  if (lowercaseCheck) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (uppercaseCheck) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numberCheck) {
    characters += "0123456789";
  }
  if (specialCheck) {
    characters += "!@#$%^&*()_+~{}:";
  }

  // This for loop will add a character each time it loops until it satisfys the password length.

  var finalpassword = ""; // setting 'finalpassword' equal to an empty string allows us to store each character in the string.
  for (var i = 0; i < passwordLength; i++) {
 
    // Use the 'charAt' method followed by the 'Math.floor....' method to return a randomized character from the string indexes    
    // on lines 153, 156, 159, and 162 
    
    var tempcharacter = characters.charAt(Math.floor(Math.random() * characters.length));
    
    // This method adds the random character that tempcharacter is producing from the above line
    // and adding it into the finalpassword for the number of times the user specifies the length of the password.
    
    finalpassword += tempcharacter;
  }

  return finalpassword;
}


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
 
  //By using the query selector method - I mapped the #password in the index.html to display the password
  //This replaces the placeholder text "Your Secure Password" with our newly generated password.
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// This executes the writePassword function when the user clicks the button

generateBtn.addEventListener("click", writePassword);