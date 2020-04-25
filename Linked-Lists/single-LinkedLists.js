class Node{
    constructor(value, next){
        this.value = value
        this.next  = next
    }
}


class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        var newNode = new Node(val)
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
            newNode.next = null
            this.length ++
        }else{
            this.tail.next = newNode
            this.tail = newNode
            newNode.next = null
            this.length ++
        }
    }

    pop(){
        if(!this.head){
            return `No Nodes are present in the Lists`
        }else if(this.head === this.tail){
            this.head = null
            this.tail = null
        }
        else{
            let current = this.head
            while(current.next !== this.tail){
                current = current.next
            }
            this.tail = current
            current.next = null
            this.length--
        }
    }

    unShift(curr){
        var newNode = new Node(curr)
        if(this.head ===  null){
            this.head = newNode
            this.tail = this.head
            newNode.next = null
            this.length++
        }else{
            newNode.next = this.head
            this.head  = newNode
            this.length ++ 
        }
        
    }


    shift(){
        if(!this.head) return undefined
        var currentHead = this.head
        this.head = currentHead.next
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return currentHead
    }
    get(index){
        let idx = 0
        let current = this.head
        if(index < 0 || index>= this.length){
            return null
        }else{
            while(idx !== index){
                console.log(current.value)
                current = current.next
                idx++
               
            }
            return current
        }
    }

    set(newValue, index){
        let currentNode = this.get(index)
        if(currentNode){
            currentNode.value = newValue
            return true
        }
        return false
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false
        if(index === this.length){
             this.push(val)
             return true
        }
        if(index === 0) return this.unShift(val)
        var newNode = new Node(val)
        var prev = this.get(index - 1)
        var temp = prev.next
        prev.next = newNode
        newNode.next = temp
        this.length++
        return true
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()
        var previousNode = this.get(index - 1)
        var removed = previousNode.next
        previousNode.next = removed.next
        this.length--
        return removed
    }

    reverse(){
        var node = this.head
        this.head = this.tail
        this.tail = node
        var next
        var prev = null
        for(var i=0; i< this.length; i++){
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }


    print(){
        let arr = []
        let current = this.head
        if(!current){
            return undefined
        }else{
            // arr.push(current)
            while(current){
                arr.push(current)
                current = current.next 
            }
            console.log(arr)
        }
        
    }
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("Hello")
list.push("Hello")
list.push("Hello")
list.unShift("Vivek")
list.unShift("Gupta")
// list.unShift("Gupta")

list.print()
// list.pop()
// console.log(`**********************************************`)
// list.print()
// console.log(`**********************************************`)
// list.shift()
// list.print()
// console.log(`**********************************************`)
// list.get(3)
// console.log(`**********************************************`)
// list.set("Vipul", 3)
// console.log(`***********************************************`)
// list.print()

console.log(`*****************************************`)
list.insert(1, "Vipul")
list.print()

console.log(`*****************************************`)
list.remove(4)
list.print()

console.log(`*****************************************`)
list.reverse()
list.print()