class Driver {
  constructor (name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }


  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let horizontalBlocks = eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal)
    let verticalBlocks = parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical)
    return Math.abs(horizontalBlocks) + Math.abs(verticalBlocks)
  }

  estimatedTime(peakTime) {
    return peakTime ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3;
  }
}
