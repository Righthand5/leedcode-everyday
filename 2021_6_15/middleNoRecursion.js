
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
function middleNoRecursion(root){
    const stack = []
    const result = []
    if(!root){
        return []
    }else{
        while(root || stack.length !== 0){
            while (root){
                stack.push(root)
                root = root.left
            }
            root = stack.pop()
            result.push(root.val)
            root = root.right
        }
    }
    return result
}
console.log(middleNoRecursion(treeOjb))
