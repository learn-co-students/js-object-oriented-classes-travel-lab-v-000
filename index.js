class Driver {
  constructor(name, dateString) {
    this.name = name;
    this.startDate = new Date(dateString);
  }
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    return Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical) + Math.abs(eastWest.findIndex(element => element === this.endingLocation.horizontal) - eastWest.findIndex(element => element === this.beginningLocation.horizontal))
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }

  }
}
