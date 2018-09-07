class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(date) {
    return date - this.startDate.getUTCFullYear() - 1
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue',
    'Park', 'Madison Avenue', '5th Avenue']

    let horizontalDistance = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);

    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical;

    return horizontalDistance + verticalDistance;
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2
    }
    else {
      return this.blocksTravelled() / 3

    }

  }
}
