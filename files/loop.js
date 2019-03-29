'use strict';
  const newNames = ['Bob', 'Hob', 'Lob'];
  const logger = function(array){
    return array.forEach(x => console.log(x));
  };
  logger(newNames);