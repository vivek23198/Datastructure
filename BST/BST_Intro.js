class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    insert(value){
        var newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
            return this
        }else{
            let current =this.root
            while(true){
                if(value === current.value) return  undefined
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode
                        return this
                    }else{
                        current =  current.left
                    }
                }else if(value > current.value){
                    if(current.right === null){
                        current.right  = newNode
                        return this
                    }else{
                        current = current.right
                    }
                }
            }
        }
    }

    contains(value){
        if(this.root == null) return false

        var current = this.root,
            found = false
        while(current && !found){
            if(value < current.value){
                current = current.left
            }else if(value > current.value){
                current = current.right
            }else{
                return true
            }
        }
        return false
    }

    BFS(){
        let node = this.root,
            data = [],
            queue = [];
        queue.push(node)

        while(queue.length){
            node = queue.shift()
            data.push(node.value)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data
    }

    dfsPreOrder(){
        let data = []
        function traverse(node){
            data.push(node.value)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return data

    }

    dfsPostOrder(){
        let data = []
        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node.value)

        }
        traverse(this.root)
        return data

    }


    dfsInOrder(){
        let data = []
        function traverse(node){
            if(node.left) traverse(node.left)
            data.push(node.value)
            if(node.right) traverse(node.right)

        }
        traverse(this.root)
        return data

    }
}


var tree = new BinarySearchTree()

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

let find= tree.contains(100)
console.log(find)

let BFS = tree.BFS()
console.log(BFS)

console.log(`Pre order traversal `)

let dfsPreOrder = tree.dfsPreOrder()
console.log(dfsPreOrder)

console.log(`Post order traversal `)

let dfsPostOrder = tree.dfsPostOrder()
console.log(dfsPostOrder)

console.log(`In order traversal `)
let inOrder = tree.dfsInOrder()
console.log(inOrder)