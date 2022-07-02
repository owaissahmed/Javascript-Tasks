// // // CALCULATOR

// // var num1 = +prompt ("Enter Your First Num")
// // var opt = prompt ("Enter Your opt")
// // var num2 = +prompt ("Enter Your Last Num")

// // if (opt === "+") {
// // console.log (num1 + num2)
// // alert (num1 + num2)
// // }
// // if (opt === "/") {
// // console.log (num1 / num2)
// // alert (num1 + num2)
// // }
// // if (opt === "*") {
// // console.log (num1 * num2)
// // alert (num1 + num2)
// // }
// // if (opt === "-") {
// // console.log (num1 - num2)
// // alert (num1 + num2)
// // }
// // if (opt === "%") {
// // console.log (num1 % num2)
// // alert (num1 + num2)
// // }

// // DICE 

// // var dice = Math.random()
// // var dic = (dice * 6) + 1
// // var stars = Math.floor(dic)
// // alert ("Guess What Is Coming From Dice")
// // alert (stars)

// // // HEAD TAIL

// // var choice = prompt(name + " select heads or tails or H/T")
// // var choice = choice.toLowerCase()
// // var num = Math.random()
// // var num2 = Math.round(num)

// // if (choice === "h" || choice === "heads") {
// //     if (num2 === 0) {
// //         alert("Its heads..You Win")
// //     } else {
// //         alert("Its tails..You Lose")
// //     }
// // }
// // else if (choice === "t" || choice === "tails") {
// //     if (num2 === 1) {
// //         alert("Its tails..You Win")
// //     } else {
// //         alert("Its heads..You Lose")
// //     }
// // } else {
// //     alert("Invalid value")
// // }

// // PASSWORD GENERATER

// var textArray = ["a", "A", "b", "c", "C", "d", "D", "E", 'e', "F", 'f', "g",
//     "G", 'H', 'h', 'i', 'I', 'J', 'j', "K", "k", "L", "l", "M",
//     "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s",
//     "T", "t", "U", 'u', "V", 'v', "W", 'w', "x", "X", 'y', "Y", "Z", "z","@","#","$","&","/", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// var list = "";

//   for (i = 0; i <= 7; i++) {
// var randompassword = Math.floor(Math.random() * textArray.length);

//  list += textArray[randompassword];
// }
// alert ("Your Password is Ready..." + "\n" + list)

// // USER HIRING

// // var html = prompt("Do you know HTML..??");
// // var css = prompt("Do you know CSS..??");

// // if (html === "yes" || css === "yes") {
// //     var js = +prompt("How many years you have work on JS..??")
// //     if (js >= 2) {
// //         var city = prompt("Where you live..??")
// //         if (city === "karachi") {
// //             var age = +prompt("How many years old you are..??")
// //             if (age >= 18) {
// //                 alert("Congrats you are hire")
// //             } else {
// //                 alert("You are not select bcz you are not 18 years old")
// //             }
// //         } else {
// //             alert("You are not select bcz you are not live in karachi")
// //         }
// //     } else {
// //         alert("You are not select bcz you are not bcz you have no expierience on JS over 2 years")
// //     }
// // } else {
// //     alert("You are not select bcz you are not know both HTML and CSS")
// // }

// // // RESTAURENT

// // var input = prompt("What do you want to eat..?")
// // var desi = ["-","biryani", "pulao", "nihari", "qorma", "karahi", "burger", "pizza", "daal", "shawarma", "fish","won-ton" ,"pasta", "chaat","falooda" ,"gol gappe", "shami kabab", "chapli kabab", "tikka", "broast", "roll", "nuggets", "fries", "soup", "cold drink ", "salad ", "raita", "tea", "coffee","ice-cream","shakes"]
// // input = input.toLowerCase();
// // var flag = false

// // if (input === "") {
// //     flag = "empty"
// // }

// // for (i = 0; i < desi.length; i++) {
// //     if (input === desi[i]) {
// //         alert(input + " is " + "Availible")
// //         flag = true
// //         document.write("<h1>" + "Availible Items In Our Restaurent :" + "</h1>")

// //         for (j = 1; j < desi.length; j++) {
// //             document.write("<h3>" + j + ") "+ desi[j] + "</h3>")
// //         }
// //     }
// // }

// // if (flag === false) {
// //         alert(input + " is not availible")
// //         document.write("<h1>" + "Availible Items In Our Restaurent" + "</h1>")

// //         for (j = 1; j < desi.length; j++) {
// //             document.write("<h3>" + j + ") "+ desi[j] + "</h3>")
// //         }
// //     }

// // if (flag === "empty") {
// //     alert("Plzzz fill this requirement")
// // }

// QURBANI

// var today = new Date();
// var qurbani1day = new Date("July 10, 2022");
// var todayms = today.getTime();
// var qurbani1dayms = qurbani1day.getTime();
// var difference = qurbani1dayms - todayms;
// var daysremaining = difference / (1000 * 60 * 60 * 24);
// var hoursremaining = difference / (1000 * 60 * 60);
// var minutesremaining = difference / (1000 * 60);
// var days = Math.floor(daysremaining);
// var hours = Math.floor(hoursremaining);
// var minutes = Math.floor(minutesremaining);

// console.log (days)
// console.log (hours)
// console.log (minutes)

// document.getElementById("first").innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + "left " + "<br>" + " in Qurbani";


// var today = new Date ()
// var qurbani2day = new Date ("11 july 2022")
// var todayms = today.getTime()
// var qurbani2dayms = qurbani2day.getTime()
// var difference = (qurbani2dayms - todayms)
// var daysremaining = difference / (1000 * 60 * 60 * 24);
// var hoursremaining = difference / (1000 * 60 * 60);
// var minutesremaining = difference / (1000 * 60);
// var days = Math.floor(daysremaining)
// var hours = Math.floor(hoursremaining)
// var mints = Math.floor(minutesremaining)

// console.log (days)
// console.log (hours)
// console.log (mints)

// var today = new Date ()
// var qurbani3day = new Date ("12 july 2022")
// var todayms = today.getTime()
// var qurbani3dayms = qurbani3day.getTime()
// var difference = (qurbani3dayms - todayms)
// var daysremaining = difference / (1000 * 60 * 60 * 24);
// var hoursremaining = difference / (1000 * 60 * 60);
// var minutesremaining = difference / (1000 * 60);
// var days = Math.floor(daysremaining)
// var hours = Math.floor(hoursremaining)
// var mints = Math.floor(minutesremaining)

// console.log (days)
// console.log (hours)
// console.log (mints)