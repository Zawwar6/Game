// let firstCard = 2;
// let secondCard = 11;

// let sum = firstCard + secondCard;


// let age = 21;
// if(age < 21){
//     console.log("You can not enter in the club");
// }
// else{
//     console.log("Welcome");
// }

// let age =100;

// if(age < 100){
//     console.log("You are not eligible");
// }
// else if(age === 100){
//     console.log("Here is your birthday card from king");
// }
// else{
//     console.log("Not eligible you have already gotten one");
// }
// let firstCard = 10;
// let secondCard = 11;
// let sum = firstCard + secondCard;

// let message = "";

// if(sum<=21){
//     console.log("Do you want a new card?");
// }
// else if(sum===21){
//     console.log("You have got black jack");
// }
// else{
//     console.log("You lose the game");
// // }
// let array = ["5 years of experience teaching Maths","Undegraduate","Frontened developer","HTML CSS JS", ]

// console.log(array[1]);
// console.log(array[2]);
// console.log(array[0]);
// console.log(array[3]);

// console.log(array.length);

// let messages = ["Hi","My name is Zawwar Khatri","My age is 19 years old"];
// let newMessage = "I am a Software engineer";

// messages.push(newMessage);
// console.log(messages);

// messages.pop(newMessage);
// console.log(messages);

// let cardes = [9,8,6];
// for (let i =0;i<cardes.length;i++){
//     console.log(cardes[i]);
// }
// let sentence = ["My","Name","is","Zawwar Khatri"];
// let greetingEl = document.getElementById("greeting-el")

// for(let i = 0; i<sentence.length;i++){
//     greetingEl.textContent += sentence[i] + " "
// }
// let player1Time = 102;
// let player2Time = 110;

// function totalPlayerTime(){
//     return player1Time + player2Time;
// }
// let totalTime = totalPlayerTime();

// console.log(totalTime);

// function showAlert(){
//    for(let i = 0;i<4;i++){
//     alert(i);
   
//    }
// }
// showAlert()

// let hasSolved = false;
// let hasPassed = false;
// if(hasSolved === false && hasPassed === false){
//     problemSolved();
// }

// function problemSolved(){
//     console.log("You are certified");
// }

let likesDocumentaries = true;
let likeStartups = false;

if(likesDocumentaries == true || likeStartups ==false){
   recommendMovie()
}
function recommendMovie(){
    console.log("Hey your movie is released");
}