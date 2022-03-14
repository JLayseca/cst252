/*
 * Author: Sugi and Jeremy
 * Created: 13th March
 * License: Public Domain
 */


//Find the button to attatch the click handler
$("#dumb-button").click(function(){
//remove existing attribute
  $("p").css("color", "");
//toggle a new class
  $("#challenge").toggleClass("red");
})


$("#problems-button").click(function(){
//toggle a new class
  $("#problems").toggleClass("blue");
})


$("#results-button").click(function(){
//toggle a new class
  $("#results").toggleClass("green");
})
