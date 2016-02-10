function least() {

    var n1 = parseInt(document.getElementById("least").value);
    var n2 = parseInt(document.getElementById("greatest").value);
    var n3 = parseInt(document.getElementById("mean").value);
    var n4 = parseInt(document.getElementById("sum").value);
    var n5 = parseInt(document.getElementById("product").value);

    var numleast = Math.min(n1, n2, n3, n4, n5);
    var nummax = Math.max(n1, n2, n3, n4, n5);
    var numsum = n1 + n2 + n3 + n4 + n5;
    var nummean = numsum / 5;
    var numprod = n1 * n2 * n3 * n4 * n5;

    document.getElementById("least1").innerHTML = numleast;
    document.getElementById("greatest2").innerHTML = nummax;
    document.getElementById("mean3").innerHTML = nummean;
    document.getElementById("sum4").innerHTML = numsum;
    document.getElementById("product5").innerHTML = numprod;
}