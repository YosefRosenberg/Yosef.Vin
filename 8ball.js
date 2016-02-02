var magicResponse = ["Yes","No","Maybe","Hahahah", "Time will tell!"];
var userResponse = ""
var magicAnswer= "Answer is:  "

function randomAnswer() {
  randomResponse = Math.floor(Math.random()*magicResponse.length);
  var question = document.getElementById("search").value;
  var destiny = magicResponse[randomResponse]
  answer.innerHTML = magicAnswer + destiny;
  question = document.getElementById("search").value = ""
};
