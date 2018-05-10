class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  startDate() {
    return startDate;
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
    const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

    const nsBlocks = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);

    const ewBeginIndex = eastWest.indexOf(this.beginningLocation.horizontal);
    const ewEndIndex = eastWest.indexOf(this.endingLocation.horizontal);
    const ewBlocks = Math.abs(ewEndIndex - ewBeginIndex);

    return nsBlocks + ewBlocks;
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    }
    else {
      return this.blocksTravelled() / 3;
    }
  }

}
