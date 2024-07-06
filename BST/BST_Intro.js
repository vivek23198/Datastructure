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


    dfsInOrder(data){
        function traverse(node){
            if(node.left) traverse(node.left)
            data.push(node.value)
            if(node.right) traverse(node.right)

        }
        traverse(this.root)
        return data

    }

    delete(value) {
        this.root = this._deleteNode(this.root, value);
    }

    _deleteNode(root, value) {
        if (root === null) {
            return null;
        }

        // Traverse down the tree
        if (value < root.value) {
            root.left = this._deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this._deleteNode(root.right, value);
        } else {
            // Found the node to delete

            // Case 1: Node to delete has no children or only one child
            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }

            // Case 2: Node to delete has two children
            // Find the in-order successor (smallest node in the right subtree)
            let successor = this.inOrderSuccessor(root.right);
            // Replace the value of root with the value of successor
            root.value = successor.value;
            // Delete the successor node from the right subtree
            root.right = this._deleteNode(root.right, successor.value);
        }

        return root;
    }

    inOrderSuccessor(root) {
        while(root.left) {
            root = root.left;
        }
        return root;
    }


    rangeSearch(x, y) {
        let result = [];
        this._rangeSearchHelper(this.root, x, y, result);
        return result;
    }

    // Recursive function to perform in-order traversal and collect values within range
    _rangeSearchHelper(node, x, y, result) {
        if (node === null) {
            return;
        }

        // Add current node value if it's within the range
        if (node.value >= x && node.value <= y) {
            this._rangeSearchHelper(node.left, x, y, result);
            result.push(node.value);
            this._rangeSearchHelper(node.right, x, y, result);
        } else if(node.value >= y) {
            this._rangeSearchHelper(node.left, x, y, result);
        } else {
            this._rangeSearchHelper(node.right, x, y, result);
        } 
    }



    // Print all root-to-leaf paths
    printRootToLeafPaths() {
        let paths = [];
        this._collectPaths(this.root, [], paths);
        paths.forEach(path => console.log(path.join(' -> ')));
    }

    // Helper function to collect paths
    _collectPaths(node, currentPath, paths) {
        if (node === null) {
            return;
        }

        // Add current node's value to the current path
        currentPath.push(node.value);

        // If it's a leaf node, add current path to paths
        if (node.left === null && node.right === null) {
            paths.push([...currentPath]);
        } else {
            // Recursively traverse left and right subtrees
            this._collectPaths(node.left, currentPath, paths);
            this._collectPaths(node.right, currentPath, paths);
        }

        // Remove current node's value from current path to backtrack
        currentPath.pop();
    }

        // Function to find the kth largest element in the BST
        kthLargest(k) {
            let result = [];
            this._reverseInOrderTraversal(this.root, result);
            if (k <= 0 || k > result.length) {
                return null; // k out of range
            }
            return result[k - 1];
        }
    
        // Helper function: Reverse in-order traversal to collect elements in descending order
        _reverseInOrderTraversal(node, result) {
            if (node === null) {
                return;
            }
            this._reverseInOrderTraversal(node.right, result);
            result.push(node.value);
            this._reverseInOrderTraversal(node.left, result);
        }

           // Function to find the kth smallest element in the BST
    kthSmallest(k) {
        let result = [];
        this.dfsInOrder(result);
        if (k <= 0 || k > result.length) {
            return null; // k out of range
        }
        return result[k - 1];
    }
    
}


var tree = new BinarySearchTree()
let arr = [10, 6, 15, 3, 8, 20]

arr.forEach(elem => tree.insert(elem))


let find= tree.contains(100)
console.log(find)


console.log(`Pre order traversal `)
let dfsPreOrder = tree.dfsPreOrder()
console.log(dfsPreOrder)


console.log(`In order traversal `)
let inOrder = tree.dfsInOrder([])
console.log(inOrder)


console.log(`Post order traversal `)
let dfsPostOrder = tree.dfsPostOrder()
console.log(dfsPostOrder)

console.log(`Before Deletion of Node`);
let beforeDeletion = tree.dfsInOrder([])
console.log(beforeDeletion)

tree.delete(15)
console.log(`After Deleted Node `)
let afterDeletion = tree.dfsInOrder([])
console.log(afterDeletion)

console.log(`Print Node value in range`);
let rangeValue = tree.rangeSearch(3, 15)
console.log(rangeValue)

// Print all root-to-leaf paths
console.log("Root-to-leaf paths:");
tree.printRootToLeafPaths();

console.log("Find Kth Largest Element");
let kthLargestElement = tree.kthLargest(3);
console.log(kthLargestElement)

console.log("Find Kth Smallest Element");
let kthSmallestElement = tree.kthSmallest(2);
console.log(kthSmallestElement)