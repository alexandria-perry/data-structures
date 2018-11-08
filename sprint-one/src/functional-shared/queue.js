var Queue = function() {
  var someInstance = {};

_.extend(someInstance, queueMethods);
someInstance.storage = {};
someInstance.front = 0;
someInstance.back = 0;

return someInstance;

};

var queueMethods = {

  enqueue : function(value) {
    this.storage[this.back] = value;
    this.back++;
  },

  dequeue : function() {    
    if (this.back > this.front) {
      var temp = this.storage[this.front];
      delete(this.storage[this.front])
      this.front++;
      return temp;
    }
  },

  size : function() {
    return this.back - this.front;
  }
};

