class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
     return Math.floor((new Date(endDate) - this.startDate) / 31557600000);
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {

    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];

    let horizontalBlocks = (eastWest.indexOf(this.endingLocation.horizontal) + 1) - (eastWest.indexOf(this.beginningLocation.horizontal) + 1);

    let verticalBlocks = this.endingLocation.vertical - this.beginningLocation.vertical;

    return horizontalBlocks + verticalBlocks;

  }

  estimatedTime(peak) {
    if (peak === true) {
      return this.blocksTravelled() * .5;
    } else {
      return this.blocksTravelled() * (1/3);
    }
  }
}
