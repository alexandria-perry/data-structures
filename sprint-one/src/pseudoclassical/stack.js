var Stack = function() {
   this.storage = {};

};



	
	Stack.prototype.push = function(value) {
      var length = Object.keys(this.storage).length;
	  this.storage[length] = value;

    };

    Stack.prototype.pop = function() {
      var length = Object.keys(this.storage).length - 1;
      var first = this.storage[length];
      delete this.storage[length];
      return first;
    };

	 Stack.prototype.size = function() {
	 return Object.keys(this.storage).length;
	};


