class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(years) {
    // console.log(years);
    // console.log(this.startDate);
    // console.log(this.startDate.getFullYear());
    return years - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = [
      "1st Avenue",
      "2nd Avenue",
      "3rd Avenue",
      "Lexington Avenue",
      "Park",
      "Madison Avenue",
      "5th Avenue"
    ];
    let verticalBlocks =
      this.endingLocation.vertical - this.beginningLocation.vertical;
    let horizontalBlocks =
      eastWest.indexOf(this.endingLocation.horizontal) -
      eastWest.indexOf(this.beginningLocation.horizontal);
    return Math.abs(verticalBlocks) + Math.abs(horizontalBlocks);
  }

  estimatedTime(isPeakHour) {
    if (isPeakHour) return Math.ceil(this.blocksTravelled() / 2);
    return Math.ceil(this.blocksTravelled() / 3);
  }
}
