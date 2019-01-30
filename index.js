class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(year) {
    const startYear = this.startDate.getFullYear();
    return year - startYear;
  };
};

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };

  blocksTravelled() {
    const northSouthBlocks = (this.endingLocation.vertical - this.beginningLocation.vertical);
    const southNorthBlocks = (this.beginningLocation.vertical - this.endingLocation.vertical);

    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];

    const startBlock = eastWest.findIndex(el => el === this.beginningLocation.horizontal) + 1;
    const endBlock = eastWest.findIndex(el => el === this.endingLocation.horizontal) + 1;

    const eastWestBlocks = (startBlock - endBlock);
    const westEastBlocks = (endBlock - startBlock);

    let verticalBlocks = 0;
    if (northSouthBlocks > southNorthBlocks) {
      verticalBlocks = northSouthBlocks;
    } else {
      verticalBlocks = southNorthBlocks;
    };
    let horizontalBlocks = 0;
    if (eastWestBlocks > westEastBlocks) {
      horizontalBlocks = eastWestBlocks;
    } else {
      horizontalBlocks = westEastBlocks;
    };
    return verticalBlocks + horizontalBlocks;
  };

  estimatedTime(peak = false) {
    if (peak === true) {
      return (this.blocksTravelled() / 2);
    } else {
      return (this.blocksTravelled() / 3);
    };
  };
}
