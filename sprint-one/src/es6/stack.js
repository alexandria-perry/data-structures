class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  }
	
	push(value) {
      var length = Object.keys(this.storage).length;
	  this.storage[length] = value;

    }

    pop() {
      var length = Object.keys(this.storage).length - 1;
      var first = this.storage[length];
      delete this.storage[length];
      return first;
    }
	 size() {
	 return Object.keys(this.storage).length;
	};

}








