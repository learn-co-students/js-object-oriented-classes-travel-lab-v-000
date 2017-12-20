class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    
    let horizontalBlocks = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);
    let verticalBlocks = this.endingLocation.vertical - this.beginningLocation.vertical;
    let totalBlocks = Math.abs(horizontalBlocks) + Math.abs(verticalBlocks);

    return totalBlocks;
  }

  estimatedTime(peak) {
    return peak ? (this.blocksTravelled() / 2) : (this.blocksTravelled() / 3)
  }
}