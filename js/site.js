//get string value from page
//controller function
let getValue = function getValue() {
  document.getElementById("alert").classList.add("invisible");
  let userString = document.getElementById("userString").value;
  let revString = reverseString(userString);
  displayString(revString);
};
//Reverse the string
//logic function
function reverseString(userString) {
  let revString = [];
  //reverse a string using a for loop
  //index= last position in an array   AKA array.length -1;
  //DECREMENTING FOR LOOP:
  for (let index = userString.length - 1; index >= 0; index--) {
    revString += userString[index];
  }
  return revString;
}
//Display result to the user
//View function
function displayString(revString) {
  //write to the page
  document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
  //show the alert
  document.getElementById("alert").classList.remove("invisible");
  document.getElementById("alert").classList.remove("d-none");
}

    
