class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    const endDate = new Date(year, 0, 1); //parseInt(endDate)
    const test = parseInt(endDate);
    const difference = Math.abs(endDate - this.startDate);
    const totalYears = Math.ceil(difference/(365*24*60*60*1000));
    return totalYears;
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  // both attribtues are JS objects with attributes of horizontal and vertical

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    const horizontalBlocks = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
    const verticalBlocks = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);

    return horizontalBlocks + verticalBlocks;
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    }

    return this.blocksTravelled() / 3;
  }
}
