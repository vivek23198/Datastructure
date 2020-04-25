class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val){
        let newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        }else{
            this.last.next = newNode
            this.last = newNode
        }
        ++this.size

    }

    dequeue(){
        if(!this.first) return null

        let temp = this.first
        if(this.first ===  this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--
    }

    print(){
        let arr = []
        let current = this.first
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

let queue = new Queue()
queue.enqueue("Vivek")
queue.enqueue("Gupta")
queue.enqueue("Sush")
queue.print()
console.log(`******************************`)

queue.dequeue()
queue.print()


