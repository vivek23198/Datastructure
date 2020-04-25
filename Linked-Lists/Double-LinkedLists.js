class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        var newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        if(!this.head) return undefined

        var poppedNode = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.tail = poppedNode.prev
            this.tail.next = null
        }
            this.length--
            return poppedNode
    }

    shift(){
        if(this.length === 0) return undefined
        
        if(this.length === 1){
            this.head = null
            this.tail = null
        }

        let current = this.head
        this.head = current.next
        this.head.prev = null
        current.next = null

        this.length -- 
    }

    unshift(val){
      let   newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode

        this.length++
    }

    get(index){
        if(index < 0 || index >= this.length) return undefined

        if(index <= (this.length / 2)){
            let current = this.head
            let idx = 0
            while(idx != index){
                current = current.next
                idx++
            }
            return current
        }else{
            let current = this.tail
            let idx = this.length -1
            while(idx !== index){
                current = current.prev
                idx--
            }
            return current 
        }
    }

    set(index, val){
        let foundNote = this.get(index)

        if(foundNote !== null){
            foundNote.val = val
            return true 
        }
        return false
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false
        if(index === 0) return !!this.unshift(val)

        if(index === this.length) return !!this.push(val)
        let newNode = new Node(val)
        let beforeNode = this.get(index - 1)
        let afterNode = beforeNode.next
        beforeNode.next = newNode
        newNode.prev = beforeNode
        afterNode.prev = newNode
        this.length++
    }

    remove(index){
        if(index<0 || index >= this.length) return undefined
        if(index === 0) return this.shift()
        if(index === this.length -1) return this.pop()

        var removedNode = this.get(index)
        removedNode.prev.next = removedNode.next
        removedNode.next.prev = removedNode.prev
        removedNode.next = null
        removedNode.prev = null
        this.length--
    }


    traverse(){
        if(this.head === null) return null
        let current = this.head
        let arr = []
        while(current){
            arr.push(current)
            current = current.next
        }
        console.log(arr)
    }
}



var list = new DoublyLinkedList()

list.push("Vivek")
list.push("Gupta")
list.push("Prinsu")
list.unshift("Sushila")
list.push("Mona")
list.push("Nidhi")
list.push("Kshama")
// list.shift()

// list.traverse()
// console.log(`********************************************************`)
// let getIndexElement = list.get(1)
// console.log(getIndexElement)
// console.log(`********************************************************`)

// let setIndexElement = list.insert(1, "shonaa")
// // console.log(setIndexElement)
// list.traverse()

list.remove(2)

console.log(`********************************************************`)
list.traverse()
