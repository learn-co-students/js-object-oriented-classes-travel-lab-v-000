class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 1, 1);
    let totalYears = (endDate - this.startDate) / (365 * 24 * 60 * 60 * 1000);
    return parseInt(totalYears);
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  avenueIndex(avenue) {
    return eastWest.indexOf(avenue);
  }

  blocksTravelled() {
    let horizontalBlocks = this.avenueIndex(this.endingLocation.horizontal) - this.avenueIndex(this.beginningLocation.horizontal);
    let verticalBlocks = this.endingLocation.vertical - this.beginningLocation.vertical;
    return Math.abs(horizontalBlocks) + Math.abs(verticalBlocks);
  }

  estimatedTime(peakHours) {
    if(peakHours) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
