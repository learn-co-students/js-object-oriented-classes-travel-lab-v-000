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
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let eastWestTravelled = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);
    let northSouthTravelled = this.endingLocation.vertical - this.beginningLocation.vertical;
    return northSouthTravelled + eastWestTravelled;
  }
  estimatedTime(peakHours) {
    return peakHours === true ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3;
  }
}
