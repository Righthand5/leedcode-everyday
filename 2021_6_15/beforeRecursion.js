const arr = []
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
function PreorderSearchBinaryTree(treeOjb){
    if(!treeOjb){
        return undefined
    } else {
        arr.push(treeOjb.val)
        PreorderSearchBinaryTree(treeOjb.left)
        PreorderSearchBinaryTree(treeOjb.right)
    }
}
PreorderSearchBinaryTree(treeOjb)
// console.log(PreorderSearchBinaryTree(treeOjb))
// 此处会重新调用一次
console.log(arr)
