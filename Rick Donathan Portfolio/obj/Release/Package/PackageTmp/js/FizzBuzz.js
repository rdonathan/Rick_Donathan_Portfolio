function findFizz() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    if (n1 >= n2)
        document.getElementById("displayResult").innerHTML = "Number 1 should be greater than Number 2";
    else {
        var result = "";
        for (i = n1; i <= n2; i++) {
            if (i % 3 === 0) {
                if (i % 5 === 0) {
                    result += "FizzBuzz <br />";
                } else {
                    result += "Fizz <br />";
                }
            } else if (i % 5 === 0) {
                result += "Buzz <br />";
            } else {
                result += (i + "<br />");
            }
        }

        document.getElementById("displayResult").innerHTML = result;
    }
}