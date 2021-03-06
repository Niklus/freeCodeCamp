/*
  Write a function that splits an array (first argument) 
  into groups the length of size (second argument) and 
  returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
 	
	var newArr = [];
	var newSize = size;
	
	for(var i = 0; i<arr.length; i+=size){	     
		newArr.push(arr.slice(i, newSize));	
		newSize+=size;
	}
	
	return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);