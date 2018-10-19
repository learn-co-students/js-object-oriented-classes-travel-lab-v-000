let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return (endDate - this.startDate.getFullYear());
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  avenueToInteger(avenue) {
    return (eastWest.indexOf(avenue));
  }

  blocksTravelled() {
    let horizontalDistance =
      this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal);
    let verticalDistance =
      this.endingLocation.vertical - this.beginningLocation.vertical;

    return (Math.abs(horizontalDistance) + (Math.abs(verticalDistance)));
  }

  estimatedTime(peakHours) {
    return (peakHours ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3);
  }
}
