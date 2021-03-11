

// Assignment Code
var generateBtn = document.querySelector("#generate"); 
// var lowerCase = "abcd";
// var upperCase = "ABCD";
// var numberChar = "12345";
// var specialChar = "!@#$%";
// // var lowerCase = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" ,"i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , 
// // "t" , "u" , "v" , "w" , "x" , "y", "z"];
// // var upperCase = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , 
// // "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z"];
// // var numberChar = ["0", "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9"];
// // var specialChar = ["!", "@" , "#" , "$" , "%" , "^" , "&" , "*" , "(" , ")" , "_" , "+" , ";" , ";" , "~" , "<" , ">" , 
// // "." , "?" , "/" , "|"];
// var passwordLength;
// var uppercaseCheck;
// var lowercaseCheck;
// var numberCheck;
// var specialCheck; 


// var lengthofpassword = 10;
// var password = "abcdABCD1234!@#$";
// var finalpass = "";

// for (var i = 0; i<lengthofpassword; i++){
//   var randomChar = password.charAt(Math.floor(Math.random() * password.length));
//   finalpass += randomChar
// }
// console.log(finalpass);




// Determine password length

function determineLength(){
  //Ask user for password length
  var passwordLength = prompt("Enter password length. Min 8 characters and max 128 characters");

    if (passwordLength<8){
      alert("Password length must be a number between 8-128 characters");
       determineLength();
    }else if (passwordLength>128){
      alert("Password length must be a number between 8-128 characters");
       determineLength();
    }else if (isNaN (passwordLength)){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }
  return passwordLength;
    
  
}

function determineUppercase(){
  uppercaseCheck = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
   
    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Please answer Yes or No");
      determineUppercase();
    }else if (uppercaseCheck === "yes" || uppercaseCheck === "y"){
      uppercaseCheck = true;
    }else if (uppercaseCheck === "no" || uppercaseCheck === "n"){
      uppercaseCheck = false;
    }else {
      alert("Please answer Yes or No");
      determineUppercase();
    }
   
    return uppercaseCheck;
}


function determineLowercase(){
  lowercaseCheck = prompt("Do you want to include lowercase letters in your password? \n(Yes or No)");
   
    if (lowercaseCheck === null || lowercaseCheck === ""){
      alert("Please answer Yes or No");
      determineLowercase();
    }else if (lowercaseCheck === "yes" || lowercaseCheck === "y"){
      lowercaseCheck = true;
    }else if (lowercaseCheck === "no" || lowercaseCheck === "n"){
      lowercaseCheck = false;
    }else {
      alert("Please answer Yes or No");
      determineLowercase();
    }
    
    return lowercaseCheck;
}

  function determineNumbers(){
    numberCheck = prompt("Do you want to include numbers in your password? \n(Yes or No)");
     
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
  }else if (specialCheck === "no" || specialCheck === "n"){
    specialCheck = false;
  }else {
    alert("Please answer Yes or No");
    determineSpecial();
  }

  return specialCheck;
}






function generatePassword(){
 

  var passwordLength = determineLength();

  var lowercaseCheck = determineLowercase();

  var uppercaseCheck = determineUppercase();
  
  var numberCheck = determineNumbers();
 
  var specialCheck = determineSpecial();
  
  console.log(passwordLength, lowercaseCheck, uppercaseCheck, specialCheck);
 
  var characters = "";

  if (lowercaseCheck){
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (uppercaseCheck){
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numberCheck){
    characters += "0123456789";
  }
  if (specialCheck){
    characters += "!@#$%^&*()_+~{}:";
  }






  var finalpassword = "";
  for (var i = 0; i < passwordLength; i++){
    var tempcharacter = characters.charAt(Math.floor(Math.random() * characters.length));
    finalpassword += tempcharacter;
  }
  console.log(finalpassword);
  return finalpassword;
}
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// var generateBtn = document.querySelector("#generate");  //returns the first element in the document that matches the specified selector. Basically, this grabs the 'Generate Password' button;
// generateBtn.addEventListener("click", generatePassword);  // upon click, executes writePassword function. But why doesn't writePassword need ()?

  // Add event listener to generate button
  
  generateBtn.addEventListener("click", writePassword);