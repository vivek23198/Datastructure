class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val){
        var newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        }else{
            let temp = this.first
            this.first = newNode
            this.first.next = temp
            this.head = newNode
        }
        return ++this.size
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
    pop(){
        if(!this.first) return null
        var temp = this.first

        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--
    }

}

var stack = new Stack()

stack.push("Vivek")
stack.push("Gupta")
stack.push("Vipul")
stack.print()
console.log(`***************************************`)


stack.pop()


stack.print()


