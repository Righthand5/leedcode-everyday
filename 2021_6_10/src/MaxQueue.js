var MaxQueue = function() {
    this.queueA = [];
    this.queueB = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if (!this.queueA.length){
        return -1
    }else{
        if (!this.queueB.length){
            return -1
        }else{
            return this.queueB.slice(-1);
        }
    }
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.queueA.push(value)
    if (!this.queueB.length){
        this.queueB[0] = value
    }else {
        console.log("1")
        this.queueB.push(value > this.queueB[this.queueB.length-1] ? value : this.queueB[this.queueB.length-1])
    }
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if (!this.queueA.length){
        return -1
    }else {
        // this.queueB[this.queueB.length+1] = this.queueB[this.queueB.length]
        return this.queueA.shift()
    }
};



var obj = new MaxQueue()
var param_1 = obj.push_back(15)
console.log(obj.queueA);
console.log(obj.queueB);
console.log(param_1)
var param_2 = obj.max_value()
console.log(obj.queueA);
console.log(obj.queueB);
console.log(param_2)
var param_3 = obj.push_back(0)
console.log(obj.queueA);
console.log(obj.queueB);
console.log(param_3)
var param_4 = obj.max_value()
console.log(obj.queueA);
console.log(obj.queueB);
console.log(param_4)


