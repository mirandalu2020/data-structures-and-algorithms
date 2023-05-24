

function businessTrip(graph, cityNames=[]) {
  let sum = 0;
  for (let idx = 0; idx<cityNames.length; idx++) {
    let allNodes = graph.getNodes();
    // console.log(allNodes);
    let cityNode;
    allNodes.map(city => {
      if (city.value === cityNames[idx]){
        cityNode = city;
        return cityNode;
      }
    });
    let neighbors = graph.getNeighbors(cityNode);
    let neighborsArr = neighbors.map(city =>
      city.vertex.value);
    console.log(neighborsArr);
    if (cityNames[idx]===cityNames[idx+1]) {
      sum = sum + 0;
    }

    else if (!neighborsArr.includes(cityNames[idx+1]) && cityNames[idx+1] ) {
      console.log(cityNames[idx+1] + ' is not in ' + neighborsArr);
      sum = null;
      return sum;
    }

    else if (neighborsArr.includes(cityNames[idx+1])) {
      let neighborIdx = neighborsArr.indexOf(cityNames[idx+1]);
      console.log(neighborIdx);
      let cost = neighbors[neighborIdx].weight;
      sum = sum + cost;
    }
  }
  return sum;

}

module.exports = businessTrip;
