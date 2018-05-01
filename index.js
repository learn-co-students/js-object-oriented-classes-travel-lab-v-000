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
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let verticalTotal = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    let horizontalTotal = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
    return verticalTotal + horizontalTotal;
    // debugger;
  }

  estimatedTime(peakHours) {
    return peakHours ? this.blocksTravelled() /2 : this.blocksTravelled() / 3;
  }
}