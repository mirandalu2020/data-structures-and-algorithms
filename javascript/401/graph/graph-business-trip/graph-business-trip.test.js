const businessTrip = require('./graph-business-trip');
const Graph = require('./../graph');
let cities = new Graph();

describe('Testing the calculation of total cost to a trip modeled by graphs', ()=>{

  const seattle = cities.addNode('Seattle');
  const sanJuan = cities.addNode('San Juan');
  const spokane = cities.addNode('Spokane');
  const nyc = cities.addNode('NYC');
  const vancouver = cities.addNode('Vancouver');
  const chicago = cities.addNode('Chicago');
  cities.addEdge(seattle, sanJuan, 100);
  cities.addEdge(seattle, spokane, 120);
  cities.addEdge(sanJuan, nyc, 500);
  cities.addEdge(sanJuan, vancouver, 200);
  cities.addEdge(sanJuan, seattle, 250);
  cities.addEdge(vancouver, chicago, 420);
  cities.addEdge(nyc, sanJuan, 230);
  cities.addEdge(chicago, vancouver, 240);
  console.log(cities.getNeighbors(seattle));

  it('Should return null if the route is not defined in given array', ()=>{
    let cost = businessTrip(cities, ['Seattle', 'Vancouver', 'Chicago']);
    expect(cost).toEqual(null);
  });

  it('Should return the cost of a trip if the given array defines a route', ()=> {
    let cost = businessTrip(cities, ['Seattle', 'San Juan', 'Vancouver']);
    expect(cost).toEqual(300);
  });

  it('Should return 0 of the destination is the same city as the city of origin', ()=> {
    let cost = businessTrip(cities, ['Seattle', 'Seattle']);
    expect(cost).toEqual(0);
    let cost2 = businessTrip(cities, ['Seattle', 'Seattle', 'San Juan']);
    expect(cost2).toEqual(100);
  });


});
