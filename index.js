class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate)
  }
}

Driver.prototype.yearsExperienceFromBeginningOf = function(endDate) {
  return endDate - this.startDate.getFullYear();
}


let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];


class Route {
  constructor(startSpot, endSpot) {
    this.startSpot = startSpot;
    this.endSpot = endSpot;
  }
}

Route.prototype.blocksTravelled = function() {
  const horizontalBlocks = Math.abs(eastWest.indexOf(this.startSpot.horizontal) - eastWest.indexOf(this.endSpot.horizontal));
  const verticalBlocks = Math.abs(this.startSpot.vertical - this.endSpot.vertical);

  return horizontalBlocks + verticalBlocks;
}

//Off peak hours = 3 blocks/min
//peak hours = 2 blocks/min

Route.prototype.estimatedTime = function(x) {
  return x ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3;
}
