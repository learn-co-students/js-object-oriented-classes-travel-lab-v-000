let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(date){
    const endDate = new Date(date);
    return (endDate.getUTCFullYear()) - (this.startDate.getUTCFullYear());
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  aveToInteger(ave) {
    return eastWest.indexOf(ave);
  }

  blocksTravelled() {
    let horizontalBlocks = this.aveToInteger(this.endingLocation.horizontal) - this.aveToInteger(this.beginningLocation.horizontal);
    let verticalBlocks = this.endingLocation.vertical - this.beginningLocation.vertical;
    return horizontalBlocks + verticalBlocks;
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    }
    else {
      return this.blocksTravelled() / 3;
    }
  }
}
