var Stack = function() {
   var someInstance = Object.create(stackMethods);
   someInstance.storage = {};
	return someInstance;

}


	var stackMethods = {
	
	push : function(value) {
      var length = Object.keys(this.storage).length;
	  this.storage[length] = value;

    },

    pop : function() {
      var length = Object.keys(this.storage).length - 1;
      var first = this.storage[length];
      delete this.storage[length];
      return first;
    },

	 size : function() {
	 return Object.keys(this.storage).length;
	}
};