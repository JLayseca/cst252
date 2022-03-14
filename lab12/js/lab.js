/*
 * Author: Sugi and Jeremy
 * Created: 13th March
 * License: Public Domain
 */
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

//Find the button to attatch the click handler
$("#dumb-button").click(function(){
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
