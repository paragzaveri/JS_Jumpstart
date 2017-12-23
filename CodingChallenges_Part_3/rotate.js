/*
Rotate Challenge - Fullstack JavaScript JumpStart

Rotate an array to the right by a certain number of "steps". 

For example, the array to rotate is: [1,2,3,4,5,6,7] and 
will be rotated 3 "steps".  The final array will look like: [5,6,7,1,2,3,4].  

Notice the position of each index is shifted to the right by 3 places.

*/

// Write Code Below



function rotate(array, num){
  var newArray = [];
  for (var i = 0; i < array.length; i++){
    if (num + i < array.length){
      newArray[i + num] = array[i];
    } else {
      newArray[i + num - array.length] = array[i];
    }
  }
  return newArray;
}

// console.log(rotate([1,2,3,4,5,6,7], 3));









































































































































































// describe('rotate', function(){
//   it('rotate is a function', function(){
//     expect(typeof rotate).toEqual('function');
//   });

//   it('rotate returns an Array', function(){
//     expect(Array.isArray(rotate([22,11,500,92],2))).toEqual(true);
//   });

//   it('rotate moves each index to the right based on amount of "steps"', function(){
//     expect(rotate([22,11,500,92],2)).toEqual([500,92,22,11]);
//     expect(rotate([1,2,3,4,5], 3)).toEqual([3,4,5,1,2]);
//   });

//   it('if an index is at the end of the array, it will move to the front on the next step', function(){
//     expect(rotate([11,15,28,9,10,1],1)).toEqual([1,11,15,28,9,10]);
//   });

//   it('does not rotate if the amount of "steps" is zero', function(){
//     expect(rotate([1,2,3,4], 0)).toEqual([1,2,3,4]);
//   });
// });

