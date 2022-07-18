function* splitInChunks(arr, itemsPerChunk) {
 for (i = 0; i < arr.length; i += itemsPerChunk) {
   yield arr.slice(i, itemsPerChunk);
 }
}

const b = splitInChunks([1,2,3,4,5,6,7], 2);
console.log([...b]);
