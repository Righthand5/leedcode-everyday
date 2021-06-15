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
function middleRecursion(treeOjb){
    if(!treeOjb){
        return undefined
    }else {
        middleRecursion(treeOjb.left)
        arr.push(treeOjb.val)
        middleRecursion(treeOjb.right)
    }
}
middleRecursion(treeOjb)
console.log(arr)
