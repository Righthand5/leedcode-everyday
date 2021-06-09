/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.Stack = [];
    this.MinS = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.Stack.push(x)
    //此处逻辑有问题
    if(!this.MinS.length){
        this.MinS[0] = x
    }else {
        this.MinS.push(this.MinS[this.MinS.length-1] > x ? x : this.MinS[this.MinS.length - 1])
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.Stack.pop()
    this.MinS.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.Stack[this.Stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    console.log(this.MinS);
    return this.MinS[this.MinS.length-1]
};



var obj = new MinStack()
console.log(obj.push(-2));
console.log(obj.push(0));
console.log(obj.push(-3));
console.log(obj.min());
console.log(obj.pop());
console.log(obj.top());
console.log(obj.min());

