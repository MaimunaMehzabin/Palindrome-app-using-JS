function palindrome(myString) {
  var input = myString.replace(/[^A-Z0-9]/gi, "").toLowerCase();

  var reverseInput = input.split("").reverse().join("");

  if (input === reverseInput) {
    document.write("<div>" + myString + " is a palindrome </div>");
  } else {
    document.write("<div>" + myString + " is not a palindrome </div>");
  }
}
palindrome("madam");
