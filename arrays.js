// generators
function* splitInChunks(arr, itemsPerChunk) {
 for (i = 0; i < arr.length; i += itemsPerChunk) {
   yield arr.slice(i, itemsPerChunk);
 }
}

const b = splitInChunks([1,2,3,4,5,6,7], 2);
console.log([...b]);

// while
function splitIntoChunks(arr, noOfChunks) {
  var result = [];
  var i = 0;
  
  while(i < arr.length) {
    result.push(arr.slice(i, i + noOfChunks));
    i += noOfChunks;
  }
  
  return result;
}

console.log(splitIntoChunks([1,2,3,4,5,6,7], 2));
