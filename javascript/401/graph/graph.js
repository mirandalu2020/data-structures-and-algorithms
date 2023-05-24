'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {

  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(value) {
    let vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addEdge(key, vertex, weight=0) {
    let keyVertex = this.adjacencyList.get(key);
    let edge = new Edge(vertex, weight);
    keyVertex.push(edge);
  }

  getNodes(){
    return [...this.adjacencyList.keys()];
  }

  getNode(key){
    // console.log(key);
    let primaryKey = JSON.stringify(key);
    let obj = {};
    obj[primaryKey] = this.adjacencyList.get(key);
    // console.log(obj);
    return obj;
  }

  size(){
    return this.adjacencyList.size;
  }

  getNeighbors(vertex){
    return this.adjacencyList.get(vertex);
  }

  breathFirst(node) {
    let queue = [];
    let visited = new Set();

    const traverseAndPush = (node) => {
      if (!visited.has(node)){
        queue.push(node);
        visited.add(node);
        let neighbors = this.getNeighbors(node);
        // console.log(neighbors);
        if (neighbors.length) {
          for (let neighbor of neighbors){
            traverseAndPush(neighbor.vertex);
          }
        }
        else {
          let allNodes = this.getNodes();
          // console.log(allNodes);
          for (let node of allNodes) {
            traverseAndPush(node);
          }
        }
      }
    };
    traverseAndPush(node);
    console.log(queue);
    return queue;
  }
}

module.exports = Graph;



