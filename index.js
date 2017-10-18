class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    const endDate = new Date(year, 1, 1);
    let elapsed = endDate.getTime() - this.startDate.getTime();
    return Math.floor(elapsed / (1000 * 60 * 60 * 24 * 365));
  }
}

const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue',
                  'Park', 'Madison Avenue', '5th Avenue'];

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    const beginningEastWest = eastWest.indexOf(this.beginningLocation.horizontal);
    const endingEastWest = eastWest.indexOf(this.endingLocation.horizontal);
    const horizontalBlocks = Math.abs(beginningEastWest - endingEastWest);

    const beginningNorthSouth = parseInt(this.beginningLocation.vertical);
    const endingNorthSouth = parseInt(this.endingLocation.vertical);
    const verticalBlocks = Math.abs(beginningNorthSouth - endingNorthSouth);

    return horizontalBlocks + verticalBlocks;
  }

  estimatedTime(traffic) {
    return traffic ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3;
  }
}
