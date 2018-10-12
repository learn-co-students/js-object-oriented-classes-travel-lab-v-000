class Driver {

  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getUTCFullYear();
  }
}

class Route {

  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    let streetsDistance = this.endingLocation.vertical - this.beginningLocation.vertical;

    let avenuesDistance = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);
    return streetsDistance + avenuesDistance;
  }

  estimatedTime(peak) {
    return peak ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3;
  }
}
