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

  size(){
    return this.adjacencyList.size;
  }

  getNeighbors(vertex){
    return this.adjacencyList.get(vertex);
  }

}

module.exports = Graph;



