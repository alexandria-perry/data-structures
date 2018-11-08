var Stack = function() {
	var someInstance = {};
	someInstance.storage = {};

_.extend(someInstance, stackMethods);
	return someInstance;

}


	var stackMethods = {};
	
	stackMethods.push = function(value) {
      var length = Object.keys(this.storage).length;
	  this.storage[length] = value;

    };

    stackMethods.pop = function() {
      var length = Object.keys(this.storage).length - 1;
      var first = this.storage[length];
      delete this.storage[length];
      return first;
    };

	 stackMethods.size = function() {
	 return Object.keys(this.storage).length;
	};


