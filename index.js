'use strict';

const FS = require('fs');
const OS = require('os');

// Xochil's code snippet -----------------------------------------------------------
class Buffer {
  // you need an intermal array to store the values you'll put in the buffer

  // initialize the buffer
  constructor(size) {
    this.size = size; // store the initial size of the array
    this.internal_array = new Array(size); // allocate the internal array
  }

  // from copies teh contents of the inout into the internal buffer
  from(input_array) {
    // TODO Xochil: use a for loop to iterate over the input array and copy into the internal array;
  }

  // returns the contents of the buffer; a.i the internal array
  values() {
    return this.internal_array;
  }
}
// ---------------------------------------------------------------------------------
