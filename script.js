function resultReverse(){
    let num = parseInt(document.getElementById("num1").value) ;
    let rev = 0;

    while(num!==0){
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num/10);

    }      
    document.getElementById("revResult").innerText = rev;

}

function resultPalindrome(){
    let num = parseInt(document.getElementById("num2").value);
    let original = num;
    let rev = 0;

    while (num !== 0) {
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);
      }

     if (original === rev) {
        document.getElementById("palindromeResult").innerText = `${original} is a Palindrome`;
      } else {
        document.getElementById("palindromeResult").innerText = `${original} is not a palindrome`;
      }
}

 function resultFibonacci() {
      let num = parseInt(document.getElementById("num3").value);


      let a = 0, b = 1, series = "";

      for (let i = 1; i <= num; i++) {
        series += a + " ";
        let next = a + b;
        a = b;
        b = next;
      }

      document.getElementById("fibonacciResult").innerText = series.trim();
    }

function resultFactorial(){
    let num = parseInt(document.getElementById("num4").value);
    let fact = 1 ;
    for(let i=1 ; i<=num ; i++){
        fact *= i;

    }
    document.getElementById("factorialResult").innerHTML = `Factorial of a ${num} is ${fact}`
}

function resultPrime(){
    let num = parseInt(document.getElementById("num5").value);

      let isPrime = true;

      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        document.getElementById("primeResult").innerText = `${num} is a Prime number`;
      } else {
        document.getElementById("primeResult").innerText = `${num} is NOT a Prime number`;
      }
}

function countDigits() {
    let num = Number(document.getElementById("num6").value);
    let count = 0;

    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }

    document.getElementById("result6").innerText = count;
}

// 7 Sum Digits
function sumDigits() {
    let num = Number(document.getElementById("num7").value);
    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    document.getElementById("result7").innerText = sum;
}

// 8 Armstrong
function armstrong() {
    let num = Number(document.getElementById("num8").value);
    let temp = num;
    let sum = 0;
    let digits = num.toString().length;

    while (temp > 0) {
        let rem = temp % 10;
        sum += rem ** digits;
        temp = Math.floor(temp / 10);
    }

    document.getElementById("result8").innerText =
        sum === num ? "Armstrong Number" : "Not Armstrong";
}

// 9 Power
function power() {
    let base = Number(document.getElementById("base").value);
    let exp = Number(document.getElementById("exp").value);

    let result = 1;

    for (let i = 1; i <= exp; i++) {
        result *= base;
    }

    document.getElementById("result9").innerText = result;
}

// 10 Pattern 1
function pattern1() {
    let output = "";

    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            output += j;
        }
        output += "\n";
    }

    document.getElementById("result10").innerText = output;
}

// 11 Pattern 2
function pattern2() {
    let output = "";

    for (let i = 5; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            output += j;
        }
        output += "\n";
    }

    document.getElementById("result11").innerText = output;
}

// 12 Pattern 3
function pattern3() {
    let output = "";

    for (let i = 5; i >= 1; i--) {

        for (let s = 5; s > i; s--) {
            output += "  ";
        }

        for (let j = 1; j <= i; j++) {
            output += j;
        }

        output += "\n";
    }

    document.getElementById("result12").innerText = output;
}

// 13 Pattern 4
function pattern4() {
    let output = "";

    for (let i = 1; i <= 5; i++) {

        for (let s = 5; s > i; s--) {
            output += "  ";
        }

        for (let j = 1; j <= i; j++) {
            output += j;
        }

        output += "\n";
    }

    document.getElementById("result13").innerText = output;
}