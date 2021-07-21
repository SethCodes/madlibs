const madLib = document.getElementById("answer");




const lib = () => {
    let answerCard = document.getElementById("answerCard");

    answerCard.classList.remove("invis");
    answerCard.classList.add("vis");
console.log(answerCard.classList);


const foodItem = document.getElementById("food-item").value;
const nounOne = document.getElementById("noun-one").value;
const verb = document.getElementById("verb").value;
const nounTwo = document.getElementById("noun-two").value;
const place = document.getElementById("place").value;
const adjOne = document.getElementById("adj-one").value;
const adjTwo = document.getElementById("adj-two").value;
const person = document.getElementById("person").value;
const nounThree = document.getElementById("noun-three").value;
const animal = document.getElementById("animal").value;
const madLib = document.getElementById("answer");



var str = "At night I dream of " + foodItem + " that is as big as a " + nounOne + ". When I try to take a bite, it " + verb + "'s on my " + nounTwo + ". The best time I ever ate " + foodItem + " was in " + place + ". It tasted " + adjOne + ". But don't ever buy it in " + place + " though, it is most " + adjTwo + ". My " + person + " likes it best with " + nounThree + "s. Be sure to give the leftovers to your " + animal + ".";



//render string
madLib.innerHTML= str;



//remove opacity once string is rendered
if(madLib.innerHTML != ''){

//clear entries on submit
foodItem = "";
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



// const libArr = [foodItem, nounOne, verb, nounTwo, place,adjOne, adjTwo, person, nounThree, animal];
// madLib.innerHTML = str;

// libArr.forEach(function(element) {
//     console.log(element);
// });


}
// "At night I dream of () that is as big as a (). When I try to take a
// bite, it () on my ().
// The best time I ever ate () was at the (). It tasted (). But don't
// ever buy it at () though, it is most (). My () likes it best with
// (). Be sure to give the leftovers to your ().";
