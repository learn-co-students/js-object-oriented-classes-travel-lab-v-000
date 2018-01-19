class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    let startYear = this.startDate.getFullYear();
    return year - startYear;
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
      this.beginningLocation = beginningLocation;
      this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    const verticalTravel = this.beginningLocation.vertical - this.endingLocation.vertical
    const horizontalTravel = eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal)
    return Math.abs(verticalTravel) + Math.abs(horizontalTravel)
  }

  estimatedTime(peak) {
    if (peak === true) {
      return this.blocksTravelled() / 2
    }
    return this.blocksTravelled() / 3
  }
}
