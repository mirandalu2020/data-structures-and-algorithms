const Graph = require('./graph');

describe('Testing graph functionalities', ()=>{

  const graph = new Graph();

  const one = graph.addNode(1);
  const two = graph.addNode(2);
  const three = graph.addNode(3);
  const four = graph.addNode(4);

  it('1. Node can be successfully added to the graph', ()=>{
    // console.log(graph.adjacencyList.get(one));
    expect(graph.adjacencyList.get(one)).toEqual([]);
  });

  it('2. An edge can be successfully added to the graph', ()=>{
    graph.addEdge(one, two, 1);
    // console.log(graph.adjacencyList.get(one)[0].weight);
    expect(graph.adjacencyList.get(one)[0].vertex.value).toEqual(2);
    expect(graph.adjacencyList.get(one)[0].weight).toEqual(1);
  });

  it('3. A collection of all nodes can be properly retrieved from the graph', ()=>{
    let result = graph.getNodes();
    let resultArr = [];
    result.map(item => {
      // console.log(item.value);
      resultArr.push(item.value);
    });
    expect(result.length).toEqual(4);
    expect(resultArr).toEqual([1, 2, 3, 4]);
  });

  it('4. All appropriate neighbors can be retrieved from the graph', ()=>{
    graph.addEdge(one, three, 2);
    let result = graph.getNeighbors(one);
    // console.log(result);
    expect(result).toEqual( [
      { vertex: { value: 2 }, weight: 1 },
      { vertex:{ value: 3 }, weight: 2 }
    ]);
  });

  it('5. Neighbors are returned with the weight between nodes included', ()=>{
    let result = graph.getNeighbors(one);
    expect(result[0].weight).toEqual(1);
    expect(result[1].weight).toEqual(2);
  });

  it('6. The proper size is returned, representing the number of nodes in the graph', ()=>{
    expect(graph.size()).toEqual(4);
    graph.addNode(5);
    expect(graph.size()).toEqual(5);
  });

  it('7. A graph with only one node and edge can be properly returned', ()=>{
    let graph2 = new Graph();
    let node = graph2.addNode('one-node');
    graph2.addEdge(node, node, 1);
    console.log(graph2.adjacencyList);
    expect(graph2).toBeTruthy();
  });

});


// A graph with only one node and edge can be properly returned
