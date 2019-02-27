'use strict';

const fs = require('fs');
const os = require('os');
// buffer = new Buffer(100);

//--------------------------------------------------------------------------
// This is an array for the CODE that I want written into the new file
const loopCode = `\'use strict\';
  const newNames = [\'Bob\', \'Hob\', \'Lob\'];
  const logger = function(array){
    return array.forEach(x => console.log(x));
  };
  logger(newNames);`;
//--------------------------------------------------------------------------

//--------------------------------------------------------------------------
// This is my function that takes my array and splits it.
// After the array is split a BUFFER is created and the array is pushed in.
const maBuffer = function(array){
  const splitCode = array.split('');
  const createdBuffer = Buffer.alloc(splitCode.length);
  for(let i = 0; i < splitCode.length; i++){
    // In buffer.write(first is the string, then the offset number for the placement)
    createdBuffer.write(splitCode[i], i);
  }
  return createdBuffer;
};
//--------------------------------------------------------------------------

//--------------------------------------------------------------------------
// This function uses nodes built in file system referencing and creates a file.
fs.writeFile('./files/loop.js', maBuffer(loopCode), (err) => {
  if (err) throw err;
  console.log('I have created the file in ./files/');
});
//--------------------------------------------------------------------------

// let nameChars = function(array){
//   let final = [];
//   for(let i = 0; i < array.length; i++){
//     const newArray = [];
//     for(let j = 0;  j< array[i].length; j++){
//       newArray.push(array[i].charCodeAt(j));
//     }
//     final.push(newArray);
//   }
//   return final;
// };
//
// nameChars(newNames);
