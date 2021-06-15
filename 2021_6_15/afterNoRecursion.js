const tree = {
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
function afterNoRecursion(tree) {
    const result = []
    // 根节点塞入栈
    const stack = [tree]
    let currentNode
    while(stack.length > 0){
        // 推出栈中的第一个节点
        currentNode = stack.pop()
        // 如果有左节点，左节点入栈
        if(currentNode.left){
            stack.push(currentNode.left)
        }
        // 如果有右节点，右节点入栈
        if(currentNode.right){
            stack.push(currentNode.right)
        }
        // 打印当前节点
        result.unshift(currentNode.val)
    }
    return result
}
console.log(afterNoRecursion(tree))
