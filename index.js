class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear() - 1;
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let horizontalIndexStart = eastWest.indexOf(this.beginningLocation.horizontal) + 1;
    let horizontalIndexEnd = eastWest.indexOf(this.endingLocation.horizontal) + 1;
    let horizontalDistance = horizontalIndexEnd - horizontalIndexStart;
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical;
    return verticalDistance + horizontalDistance;
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }

  }
}
