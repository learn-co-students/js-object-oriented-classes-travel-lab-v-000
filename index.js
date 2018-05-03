class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear(this.startDate)
  }

}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let streets = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical)
    let avenues = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal))
    return streets + avenues
  }

  estimatedTime(peak) {
    let blocksTravelled = this.blocksTravelled()
    if (peak) {
      return blocksTravelled / 2
    }
    else {
      return blocksTravelled / 3
    }
  }

}
