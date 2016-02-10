function palindrome() {

    var userInput = document.getElementById("userinput").value;
    if (userInput === "") {
        document.getElementById("answer").innerHTML = "Please enter a word";
    }
    else {
        var backwards = "";
        for (var i = userInput.length - 1; i >= 0 ; i--) {
            backwards += userInput[i];
        }
        if (userInput === backwards) {
            document.getElementById("answer").innerHTML = userInput + " is a Palindrome";
        } else {
            document.getElementById("answer").innerHTML = userInput + " is NOT a Palindrome";
        }
    }
}