

//My Array.
var myArray = [3, 52, -7, 88, 1, -84, 10000];
document.writeln("My Array: ", myArray, "</br>")

//Sort Function
function saneSort(x){
  var valueHolder;
  var count = 0;
  for(var k = 0; k < myArray.length; k++){
    for(var i = 0; i < myArray.length; i++){
      if(myArray[i] > myArray[i+1]){
        valueHolder = myArray[i+1];
        myArray[i+1] = myArray[i];
        myArray[i] = valueHolder;
        count++;
        document.writeln("Sorted Array run ", count,": ", myArray, "</br>")
      }
    }
  }

  return myArray;
}

document.writeln("Sorted Array: ", saneSort(myArray))
