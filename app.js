// CALCULATOR

var num1 = +prompt ("Enter Your First Num")
var opt = prompt ("Enter Your opt")
var num2 = +prompt ("Enter Your Last Num")

if (opt === "+") {
console.log (num1 + num2)
alert (num1 + num2)
}
if (opt === "/") {
console.log (num1 / num2)
alert (num1 + num2)
}
if (opt === "*") {
console.log (num1 * num2)
alert (num1 + num2)
}
if (opt === "-") {
console.log (num1 - num2)
alert (num1 + num2)
}
if (opt === "%") {
console.log (num1 % num2)
alert (num1 + num2)
}

// DICE 

var dice = Math.random()
var dic = (dice * 6) +1
var stars = Math.floor(dic)
alert ("Guess What Is Coming From Dice")
alert (stars)

// HEAD TAIL

var choice = prompt(name + " select heads or tails or H/T")
var choice = choice.toLowerCase()
var num = Math.random()
var num2 = Math.round(num)

if (choice === "h" || choice === "heads") {
    if (num2 === 0) {
        alert("Its heads..You Win")
    } else {
        alert("Its tails..You Lose")
    }
}
else if (choice === "t" || choice === "tails") {
    if (num2 === 1) {
        alert("Its tails..You Win")
    } else {
        alert("Its heads..You Lose")
    }
} else {
    alert("Invalid value")
}

// PASSWORD GENERATER

var textArray = ["a", "A", "b", "c", "C", "d", "D", "E", 'e', "F", 'f', "g",
    "G", 'H', 'h', 'i', 'I', 'J', 'j', "K", "k", "L", "l", "M",
    "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s",
    "T", "t", "U", 'u', "V", 'v', "W", 'w', "x", "X", 'y', "Y", "Z", "z","@","#","$","&","/", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

var list = [];

  for (i = 0; i <= 7; i++) {
var randomNumber = Math.floor(Math.random() * textArray.length);

var word = textArray[randomNumber];

list.push(word)
    }
PasswordGenerated = list.splice(",").join("")
alert ("Your Password is Ready..." + "\n" + PasswordGenerated)