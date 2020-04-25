class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2){
        this.addVertex(vertex1)
        this.addVertex(vertex2)
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        )
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        )

    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    depthFirstRecursive(start){
        const result = []
        const visited = {}
        // console.log(this.adjacencyList)
        // const  adjacencyList = this.adjacencyList

       function dfs(vertex){
            if(!vertex) return null
            visited[vertex] = true
            result.push(vertex)
            this.adjacencyList[vertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    return dfs(neighbour)
                }     
            });
            dfs(start)
        }

        return result
    }

    depthFirstIterative(start){
        const stack = [start]
        const result = []
        const visited = {}
        let currentVertex;

        visited[start] = true
        while(stack.length){
            currentVertex = stack.pop()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neighbour=>{
                if(!visited[neighbour]){
                    visited[neighbour] = true
                    stack.push(neighbour)
                }
            })

        }
        return result
    }

    breadthFirst(start){
        const  queue = [start]
        const result = []
        const visited = {}
        let currentVertex
        visited[start] = true
        
        while(queue.length){
            currentVertex = queue.shift()
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbour =>{
                if(!visited[neighbour]){
                    visited[neighbour] = true
                    queue.push(neighbour)
                }
            })
        }
        return result
    }





    graphTraverse(){
        console.log(this.adjacencyList)
    }
}

var Node = new Graph()

Node.addVertex("A")
Node.addVertex("B")
Node.addVertex("C")
Node.addVertex("D")
Node.addVertex("E")
Node.addVertex("F")


Node.addEdge("A", "B")
Node.addEdge("A", "C")
Node.addEdge("B", "D")
Node.addEdge("C", "E")
Node.addEdge("D", "E")
Node.addEdge("D", "F")
Node.addEdge("E", "F")

Node.graphTraverse()

let visitedNode = Node.depthFirstIterative("A")

console.log(visitedNode)

let visited = Node.depthFirstRecursive("A")
console.log(visited)

let visited1 = Node.breadthFirst("A")
console.log(visited1)