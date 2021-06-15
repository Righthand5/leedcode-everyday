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
const arr = []
function afterRecursion(tree) {
    if(!tree){
        return undefined
    }
    afterRecursion(tree.left)
    afterRecursion(tree.right)
    arr.push(tree.val)
}
afterRecursion(tree)
console.log(arr)
