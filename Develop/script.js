

// Assignment Code
var generateBtn = document.querySelector("#generate"); 
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_+={}[];:'`~<,>.?/|";
var passwordLength;
var uppercaseCheck;
var lowercaseCheck;
var numberCheck;
var specialCheck; 


// Determine password length

function determineLength(){
  //Ask user for password length
  var passwordLength = prompt("Enter password length. Min 8 characters and max 128 characters");

    if (passwordLength<8){
      alert("Password length must be a number between 8-128 characters");
      return determineLength();
    }else if (passwordLength>128){
      alert("Password length must be a number between 8-128 characters");
      return determineLength;
    }else if (isNaN (passwordLength)){
      alert("Password length must be a number between 8-128 characters");
      return determineLength;
    }
    return passwordLength;
  
  
}

function determineUppercase(){
  //Ask user for text type
  uppercaseCheck = prompt("Do you want your password to contain uppercase letters? \n(Yes or No)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck === null || uppercaseCheck === "") {
      alert("Please answer Yes or No");
      determineUppercase();
    }else if (uppercaseCheck === "yes" || uppercaseCheck === "y"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no" || uppercaseCheck === "n"){
      uppercaseCheck = false;
      return uppercaseCheck
    }else {
      alert("Please answer Yes or No");
      determineUppercase();
    }
    return uppercaseCheck;
  }

  function determineLowercase(){
    lowercaseCheck = prompt("Do you want your password to contain lowercase letters? \n(Yes or No)");
    lowercaseCheck = lowercaseCheck.toLowerCase();

    if (lowercaseCheck === null || lowercaseCheck === ""){
      alert ("Please answer Yes or No");
      determineLowercase();
    }else if (lowercaseCheck === "yes" || lowercaseCheck === "y"){
      lowercaseCheck = true;
      return uppercaseCheck;
    }else if (uppercaseCheck === "no" || lowercaseCheck === "n"){
      lowercaseCheck = false;
      return lowercaseCheck
    }else {
      alert("Please answer Yes or No");
      determinelowercaseCheck()
    
    } 
    return lowercaseCheck;
  }

  function determineNumbers(){
    numberCheck = prompt("Do you want to include numbers in your password? \n(Yes or No)");
      numberCheck = numberCheck.toLowerCase();

      if (numberCheck === null || numberCheck === ""){
        alert("Please answer Yes or No");
        determineNumbers();
      }else if (numberCheck === "yes" || numberCheck === "y"){
        numberCheck = true;
      }else if (numberCheck === "no" || numberCheck === "n"){
        numberCheck = false;
      }else {
        alert("Please answer Yes or No");
        determineNumbers();
      }
      return numberCheck;
  }

function determineSpecial(){
  specialCheck = prompt("Do you want to include special characters in your password? \n(Yes or No)");
  specialCheck = specialCheck.toLowerCase();

  if (specialCheck === null || specialCheck ===""){
    alert("Please answer Yes or No");
    determineSpecial();
  }else if (specialCheck === "yes" || specialCheck === "y"){
    specialCheck = true;
  }else if (specialCheck === "no" || specialCheck === "no"){
    specialCheck = false;
  }else {
    alert("Please answer Yes or No");
    determineSpecial();
  }
  return specialCheck;
}






function generatePassword(){

  determineLength();

  determineLowercase();

  determineUppercase();
  
  determineNumbers();
 
  determineSpecial();
  
  writePassword();
}



// Write password to the #password input
function writePassword() {
  var password = "";
generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  }

  // Add event listener to generate button
 if (generateBtn.addEventListener("click", writePassword));