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
function fun(treeOjb) {
    const result = []
    const stack = [treeOjb]
    let currentNode
    while(stack.length > 0){
        currentNode = stack.pop()
        if(currentNode.right){
            stack.push(currentNode.right)
        }
        if(currentNode.left){
            stack.push(currentNode.left)
        }
        result.push(currentNode.val)
    }
    return result
}
console.log(fun(treeOjb));
