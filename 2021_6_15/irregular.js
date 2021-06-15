const treeOjb = {
    val:1,
    left:{
        val:2,
        left:{
            val:4,
        },
        right:{
            val:5,
            left:{
                val:7
            },
            right:{
                val:8,
            },
        },
    },
    right:{
        val:3,
        right:{
            val:6,
        },
    },
}
function irregular(node){
        let result = [];
        let queue = [];
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            result.push(node.val); // 不要忘记访问
            // console.log(node.value);
            if (node.left){
                queue.push(node.left);
            } //两个都为true的时候返回true一个为假时返回false
            if(node.right){
                queue.push(node.right);
            } //两个都为true的时候返回true一个为假时返回false
        }
        return result;
}

console.log(irregular(treeOjb));
