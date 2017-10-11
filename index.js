class Driver {
  constructor(name, day) {
    this.name = name;
    this.startDate = new Date(day);
  }

  yearsExperienceFromBeginningOf (year) {
    return year - this.startDate.getFullYear() - 1;
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
