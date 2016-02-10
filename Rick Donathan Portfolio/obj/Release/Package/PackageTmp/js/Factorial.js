function displayFact() {
  
    var imput = document.getElementById("fact").value;
    var answer = 1;
    for (b = imput; b >= 1; b--) {
        answer = answer * b;
    }

    
    document.getElementById("displayFactorial").innerHTML = "The factorial of " +imput +" is " +answer;
} 