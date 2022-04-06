/*
 * Author: Sugi and Jeremy
 * Created: 15th March
 * License: Public Domain
 */

//Create a function.


for(var i = 1; i < 200, i++){

  if(i % 3 == 0){

  }
  if(i % 5 == 0){

  }
  if(i % 7 == 0){

  }
}

var mybutton = document.getElementById("button");
button.addEventListener("click", function(){
  //get the value from the input field
  var name = document.getElementById("input").value;
  // use the name to get house from SortingHat function
  var houseObj = sortingHat(name);
  //output to the output div
  newText = "The Sorting Hat has sorted you into " + houseStr;
  document.getElementById("output").innerHTML = newText;
})
