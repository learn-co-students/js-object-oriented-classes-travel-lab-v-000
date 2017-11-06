let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 0, 1);
    return Math.round((endDate - this.startDate) / (365*24*60*60*1000) );
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  findIndex(ave) {
    return eastWest.indexOf(ave);
  }

  blocksTravelled() {
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical;
    let horizontalDistance = this.findIndex(this.endingLocation.horizontal) - this.findIndex(this.beginningLocation.horizontal);

    return Math.abs(verticalDistance) + Math.abs(horizontalDistance);
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
