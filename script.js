// Assignment Code

var generateBtn = document.querySelector("#generate");

// initialize an array fo each choice of characters
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var uprChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lwrChars = uprChars.map(uprChar => uprChar.toLowerCase());
var spclChars = [ " ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".","/", ":", ";", "<", "=", ">", "?", "@",  "[", "\",",
  "^", "_", "`", "{", "|", "}", "~"]

// Write password to the #password input
function writePassword() {
  var passLength = prompt("What is the desired password length?");
  // show a alert is the selected passlength is < 8, if they pressed 'cancel' or did not type a number
  // to the console
  if (passLength < 8  || !passLength || isNaN(passLength) ) 
  {
    window.alert("Please enter a number greater than or equal to 8 ");
    return;
  }
  // call the function to select password specifics
  var charSet = selectPasswordCharset();

  // generate a password according to the selected parameters
  var password = generatePassword(passLength, charSet);

  var passwordText = document.querySelector("#password");
  // render the password onto the text box on the page
  passwordText.value = password;

}

// function that returns random int
function randomInt(min, max) 
{  
  return Math.floor(Math.random() * (max - min + 1) + min);

}

// function that generates random password give a password length and a character set
function generatePassword(length, charSet) 
{
  var password = "";
  if (charSet)   // extra validation in case the user selected a valid password length but didn't include 
  {            // any character sets in the charPool array
    for (var i = 0; i < length; i++)
    {
      // select random number from 0 to the length of the charset -1
      randomIndex = randomInt(0, charSet.length -1);

      // use the random number to select a random index from the set and add it to the password;
      choice = charSet[randomIndex];
      password += choice;

    }

  }

  return password

}


function selectPasswordCharset() 
{
  // initialize empty array where character sets are going to be apended to depending on user choice
  var charPool = [];

  // ask the user which character sets to include
  var boolSpecialChars = window.confirm("Add special characters? ");
  var boolnumericChars = window.confirm("Add numeric characters? ");
  var boollwrChars = window.confirm("Add lowercase characters? ");
  var booluprChars = window.confirm("Add uppercase characters? ");

  // append character arrays to the final character pool according to the selected conditions
  if (boolSpecialChars) 
  {
    charPool = charPool.concat(spclChars);
  }

  if (boolnumericChars) 
  {
    charPool = charPool.concat(numbers);
  }

  if (boollwrChars) 
  {
    charPool = charPool.concat(lwrChars);
  }

  if (booluprChars) 
  {
    charPool = charPool.concat(uprChars);
  }

  // alert the user if they did not select any character type (ie. the charPool array is empty)
  if (charPool.length == 0 )
  {
    window.alert("At least one type of character must be selected");
    return;
  }

  // return the final character pool
  return charPool;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
