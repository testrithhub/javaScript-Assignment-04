                        //CHAPTER NO 9-11

                        //Question no 1
//Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:
//“Welcome to city of lights”

var city = prompt(" Enter yoyr city name: ");
if( city === "karachi"){
    document.write("Welcome to City of Light ")
}

                        //Question no 2
//Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the
//user is female, give the message: Good Morning Ma’am.

var gender = prompt(" Enter your gender: ");
if( gender === "male"){
    document.write(" Good Morning Sir ");
}
else if( gender === "female"){
    document.write(" Good Morning Ma'am ");
}
else{
    document.write(" Plz enter correct gender");
}

                        //Question no 3
//Write a program to take input color of road traffic signal from the user & show the message according to this table:

var color = prompt("Enter a color: ");
if( color === "red"){
    document.write("Must Stop");
}
else if( color === "yellow"){
    document.write(" Ready to Move");
}
else if( color === "green"){
    document.write(" Move now");
}
                        //Question no 4
//Write a program to take input remaining fuel in car (in litres) from user. 
//If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

var fuel = +prompt("Enter remaining fuel in car");
if( fuel < 0.25 ){
    document.write("Plz refill the fuel in your car ")
}

                        //Question no 5
//Run this script, & check whether alert message would be displayed or not. Record the outputs.

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
}
    
                        //Question no 6
//Write a program to take input the marks obtained in three subjects & total marks. 
//Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

var sub1 = +prompt("Enter your sub1 marks ");
var sub2 = +prompt("Enter your sub2 marks ");
var sub3 = +prompt("Enter your sub3 marks ");
var obt_marks = sub1 + sub2 + sub3;
var total_marks = 300;
var percent = obt_marks/total_marks*100;
document.write("<h1> MARKS SHEET </h1>");
document.write("<br>");
document.write("Total Marks: " + total_marks);
document.write("<br>");
document.write("Obtained Marks: " + obt_marks);
document.write("<br>");
document.write("Percentage: " + percent + " %");
document.write("<br>");
if(percent >=80 && percent < 100){
    document.write(" Result: You got grade A-One ");
    document.write("<br>");
    document.write("Remarks: Excellent");
}
else if( percent >= 70){
    document.write(" Result: You got grade A ");
    document.write("<br>");
    document.write("Remarks: Good ");
}
else if( percent >= 60){
    document.write(" Result: You got grade B ");
    document.write("<br>");
    document.write("Remarks: you need to improve ");
}
else{
    document.write(" Result:Fail ");
    document.write("<br>");
    document.write("Sorry");
}

                        //Question no 7
//Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

var number = 8;
var num = +prompt("Input your number range 1-10: ");
if(num === number){
    document.write(" Bingo! Correct answer ")
}
else if(num === number+1){
    document.write(" Close enough to the correct answer ")
}
else if(num !== number & num !== number+1){
    document.write(" Try Again! ")
}

                        //Question no 8
//Write a program to check whether the given number is divisible by 3.  
//Show the message to the user if the number is divisible by 3.

var num = +prompt(" Enter a number: ");
num = num % 3;
if(num === 0){
    document.write(" The given number is divisible by 3 ")
}
else if(num !== 0){
    document.write(" The given number is not divisible by 3")
}

                        //Question no 9
//Write a program that checks whether the given input is an even number or an odd number.

var number = +prompt("Enter a number: ");
number = number % 2;
if(number === 0){
    document.write("The number is Even ")
}
else if(number === 1){
    document.write(" The number is Odd ")
}

                        //Question no 10
//Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp = +prompt(" Enter temperature: ");
if(temp >= 40){
    document.write(" The weather is too hot outside. ")
}
else if(temp >= 30 & temp <= 39){
    document.write(" Today weather today is normal.")
}
else if(temp >= 20 & temp <=29){
    document.write(" Today weather is so cool.")
}
if(temp > 10 & temp <=19 ){
    document.write("OMG! Today weather is so cool.")
}

                        //Question no 11
//Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %) .Compute & show the calculated result to user.

var  num1 = +prompt("Enter first number: ");
var ope = prompt(" Enter operator:");
var num2 = +prompt("Emter second number: ");
if( ope === "+"){
     var result = num1 + num2; 
}
else if( ope === "-"){
    var result = num1 - num2; 
}
else if( ope === "*"){
    var result = num1 * num2; 
}
else if( ope === "/"){
    var result = num1 / num2; 
}
if( ope === "%"){
    var result = num1 % num2; 
}
if( ope === "**"){
    var result = num1 ** num2; 
}
document.write(result);

                        //CHAPTER NO 12-13

                        //Question no 1
//Write a program that takes a character (number or string) in a variable & checks whether the given input 
//is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

var char = +prompt("Enter a number: ");
if(char >=65 && char <=90){
    document.write("Upper case letter.")
}
else if(char >=97 && char <=122){
    document.write("Lower case letter.")
}
else{
    document.write("It's a Number")
}

                        //Question no 2
//Write a JavaScript program that accept two integers and display the larger. 
//Also show if the two integers are equal.

var num1 = +prompt(" Enter first number: ");
var num2 = +prompt(" Enter second number: ");
if(num1 === num2){
    document.write(" Both numbers are equal")
}
else if(num1 > num2){
    document.write(" Number1 is greather than Number2")
}
else{
    document.write(" Number2 is greather than Number1 ")
}

                        //Question no 3
//Write a program that takes input a number from user & state whether the number is positive, negative or zero.

var num = +prompt("Enter a number");
if(num > 0){
    document.write("Number is Positive.")
}
else if(num === 0){
    document.write("Number is Zero.")
}
else{
    document.write("Number is Negative.")
}

                        //Question no 4
//Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

var char = prompt("Enter a character: ");
if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ){
    document.write("It is a vowel. ")
}
else{
    document.write("It is not a vowel. ")
}

                        //Question no 5
//Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you
// entered matches the original password”. Show “Incorrect password” otherwise.

var password = "saqib123";
var user = prompt("Enter a Password");
if(user === ""){
    document.write("Please enter your password. ")
}
else if(user === password){
    document.write("Correct! The password you entered matches the original password ")
}
else if(user !== password){
    document.write("Incorrect Password")
}

                        //Question no 6
//This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else{
    greeting = "Good evening";
}

                        //Question no 7
//Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. 
//Implement the following case using if, else & else if statements

var time = +prompt("Enter time In 24 hours Format like:1900=7pm");
if (time < 0 || time > 2400) {
    document.write("Enter in 24 hours format");
}
else if (time >= 0000 && time < 1200) {
    document.write("Good Morning!");
}
else if (time >= 1200 && time < 1700) {
    document.write("Good Afternoon!");
}
else if (time >= 1700 && time < 2100) {
    document.write("Good Evening!");
}
else if (time >= 2100 && time <= 2400) {
    document.write("Good Night!");
}


                        //CHAPTER NO 14-16

                        //Question no 1
//Declare an empty array using JS literal notation to store student names in future.

var names = [];
names[0] = "saqib";
names[1] = "muhammad";
names[2] = "basim";
names[3] = "hussain";
names[4] = "aness";
names[5] = "abbas";
names[6] = "farooq";
console.log(names);

                        //Question no 2
//Declare and initialize a strings array.

var array = ["Apple","Banana","Grapes","Mango","Orange","Cherry"];
console.log(array);

                        //Question no 3
//Declare and initialize a numbers array.

var num = [2,5,8,13,17,23,34,56,67];
console.log(num);

                        //Question no 4
//Declare and initialize a boolean array

var bol = [true, false,false,true,false,true];
console.log(bol);

                        //Question no 5
//Declare and initialize a mixed array.

var mixed = ["saqib",8,true,"Bashir","Ahmed",420,false,40];
console.log(mixed);

                        //Question no 6
//Declare and Initialize an array and store available education qualifications in Pakistan 
//(e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser

var education = [ "SSC", "HSC", "BCS", "BS", "B.COM", "MS", "M. Phil.", "PhD"];
document.write(education);

                        //Question no 7
//Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

var cities = ["karachi","lahore","Islamabad","Quetta","Peshawer","Multan"]
console.log(cities);
var selectedCity = cities.slice(2,5);
console.log(selectedCity);

                        //Question no 8
//Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ["This", "is", "my", "cat"];
console.log("ARRAY:");
console.log(arr);
var str = ["This  is  my  cat"];
console.log("STRING:")
console.log(str);

                        //Question no 9
//Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired
//    position/index. . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.
//    Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

var color = ["red","blue","green","pink","black"];
document.write(color);
var user1 = prompt("which color are added in array:");
var user2 = prompt("which color are added in array:");
document.write("<br>");
document.write("<br>");
color.unshift(user1,user2);
document.write(color);
document.write("<br>");
document.write("<br>");
var user3 = prompt("which color added in end of array: ");
color.push(user3);
document.write(color);
document.write("<br>");
document.write("<br>");
var user4 = prompt("which color added in beginning array:");
var user5 = prompt("which color added in beginning array:");
color.unshift(user4,user5);
document.write(color);
document.write("<br>");
document.write("<br>");
color.shift();
document.write(color);
document.write("<br>");
document.write("<br>");
color.pop();
document.write(color);
document.write("<br>");
document.write("<br>");
var index = prompt("which index no want to add name:");
var user6 = prompt("which color add to desired index:");
color.splice(index,0,user6);
document.write(color);
document.write("<br>");
document.write("<br>");
var index2 = prompt("which index no want to delete in array:");
var index3 = prompt("how many colors are delete in array:");
color.splice(index2,index3);
document.write(color);


                        //Question no 10
//Create a new array. Store values one by one in such a way that you can access the values in the order in which they
//were stored. (FIFO-First In First Out)

var devices = ["keyboard","mouse","printer","moniter"];
document.write("DEVICES");
document.write("<br>");
document.write(devices);
document.write("<br>");
document.write("<br>");
document.write("OUT:");
document.write("<br>");
document.write(devices[0]);
document.write("<br>");
document.write("<br>");
document.write("OUT:");
document.write("<br>");
document.write(devices[1]);
document.write("<br>");
document.write("<br>");
document.write("OUT:");
document.write("<br>");
document.write(devices[2]);
document.write("<br>");
document.write("<br>");
document.write("OUT:");
document.write("<br>");
document.write(devices[3]);

                        //Question no 11
//Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)

var devices = ["keyboard","mouse","printer","moniter"];
document.write("DEVICES");
document.write("<br>");
document.write(devices);
document.write("<br>");
document.write("<br>");
document.write("OUT:");
document.write("<br>");
document.write(devices[3]);
document.write("<br>");
document.write("<br>");
document.write("OUT:");
document.write("<br>");
document.write(devices[2]);
document.write("<br>");
document.write("<br>");
document.write("OUT:");
document.write("<br>");
document.write(devices[1]);
document.write("<br>");
document.write("<br>");
document.write("OUT:");
document.write("<br>");
document.write(devices[0]);

                        //Question no 12
//Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
//Display the following dropdown/select menu in your browser using document.write() method:

var manufacturers = ["Apple","Samsung","Nokia","Sony","Haier"];
document.write(
    "<select>" + "<option>" + manufacturers[0] + "</option>" + 
    "<option>" + manufacturers[1] + "</option>" + 
    "<option>" + manufacturers[2] + "</option>" + 
    "<option>" + manufacturers[3] + "</option>" + 
    "<option>" + manufacturers[4] + "</option>" + "</select>"
    )

                        //Question no 13
//Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

var arr = [223,12,112,102,40,80,180,200];
arr.sort((a,b)=>{
    return a-b;
});
document.write(arr);

                        //Question no 14
// Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students like:

var std_names = ["saqib","abbas","basim"];
var marks = [334,420,370];
var per_of_std1 = marks[0]/500 *100;
var per_of_std2 = marks[1]/500 *100;
var per_of_std3 = marks[2]/500 *100;

document.write(" Score of " + std_names[0] + " is " + marks[0] + ". Percentage is " + per_of_std1 + "%");
document.write("<br>");
document.write(" Score of " + std_names[1] + " is " + marks[1] + ". Percentage is " + per_of_std2 + "%");
document.write("<br>");
document.write(" Score of " + std_names[2] + " is " + marks[2] + ". Percentage is " + per_of_std3 + "%");