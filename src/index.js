
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var length = matrix.length;
  var swapped = false;
  for (var i = 0; i < length; i++){
    swapped = false;
    for ( var j = 0; j < length-i-1; j++){
      if (matrix[j] > matrix[j + 1] ){
        matrix.swap(j, j + 1);
        swapped = true;
      } 
    }
 if (!swapped){
      break;
    }
 }
  return matrix;
}
