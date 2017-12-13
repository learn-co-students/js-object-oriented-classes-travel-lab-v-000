const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }

}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    const startingEastWest = eastWest.indexOf(this.beginningLocation.horizontal);
    const endingEastWest = eastWest.indexOf(this.endingLocation.horizontal);
    const horizontalBlocksTravelled = Math.abs( startingEastWest - endingEastWest );
    const verticalBlocksTravelled = Math.abs( this.beginningLocation.vertical - this.endingLocation.vertical);
    return horizontalBlocksTravelled + verticalBlocksTravelled;
  }

  estimatedTime(peak) {
    if (peak === true) {
      return Math.floor(this.blocksTravelled() / 2);
    } else {
      return Math.floor(this.blocksTravelled() / 3);
    }
  }

}
