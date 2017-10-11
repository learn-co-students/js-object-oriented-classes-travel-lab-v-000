class Driver {
  constructor(name, day) {
    this.name = name;
    this.startDate = new Date(day);
  }

  yearsExperienceFromBeginningOf (year) {
    const endDate = new Date(year, 1, 1);
    const totalYears = (endDate - this.startDate) / (365*24*60*60*1000);
    return parseInt(totalYears);
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled () {
    const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    const verticalBlocksTravelled = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
    const horizontalBlocksTravelled = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));
    return verticalBlocksTravelled + horizontalBlocksTravelled;
  }

  estimatedTime (peakHours) {
    if (peakHours) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
