const madLib = document.getElementById("answer");




const createParagraph = () => {
    let answerCard = document.getElementById("answerCard");

    answerCard.classList.remove("invis");
    answerCard.classList.add("vis");
console.log(answerCard.classList);


let foodItem = document.getElementById("food-item").value;
const nounOne = document.getElementById("noun-one").value;
let verb = document.getElementById("verb").value;
let nounTwo = document.getElementById("noun-two").value;
let place = document.getElementById("place").value;
let adjOne = document.getElementById("adj-one").value;
let adjTwo = document.getElementById("adj-two").value;
let person = document.getElementById("person").value;
let nounThree = document.getElementById("noun-three").value;
let animal = document.getElementById("animal").value;
let madLib = document.getElementById("answer");



var paragraph = "At night I dream of " + foodItem + " that is as big as a " + nounOne + ". When I try to take a bite, it " + verb + "'s on my " + nounTwo + ". The best time I ever ate " + foodItem + " was in " + place + ". It tasted " + adjOne + ". But don't ever buy it in " + place + " though, it is most " + adjTwo + ". My " + person + " likes it best with " + nounThree + "s. Be sure to give the leftovers to your " + animal + ".";



//render string
madLib.innerHTML= paragraph;





//clear entries on submit
foodItem = "";
foodItem.value = "";
nounOne = "";
verb = "";
nounTwo = "";
place = "";
adjOne = "";
adjTwo = "";
person = "";
nounThree = "";
animal = "";
}



