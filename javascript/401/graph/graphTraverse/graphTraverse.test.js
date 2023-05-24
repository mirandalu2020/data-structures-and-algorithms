const Graph = require('./../graph');

const graph = new Graph();
let one = graph.addNode(1);
let two =graph.addNode(2);
let three = graph.addNode(3);
let four = graph.addNode(4);
graph.addEdge(one, two, 1);
graph.addEdge(one, three, 1);
graph.addEdge(two, three, 1);
graph.addEdge(two, four, 1);
graph.addEdge(three, four, 1);

describe('Tests for graph traversal', ()=>{

  it('Should return all nodes in a graph when traverse by breath', ()=>{
    // console.log(graph);
    let allNodes = graph.breathFirst(one);
    expect(allNodes).toEqual([
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 }
    ]);
  });

  it('Should return a list of the node itself only if the node given has no neighbors', ()=>{
    let five = graph.addNode(5);
    let allNodes = graph.breathFirst(five);
    expect(allNodes).toEqual([
      { value: 5},
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 }
    ]);
  });
});
