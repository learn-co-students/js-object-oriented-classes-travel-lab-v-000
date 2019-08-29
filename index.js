let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }


  yearsExperienceFromBeginningOf(year) {
    return new Date(year) -this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    const vert = this.beginningLocation.vertical - this.endingLocation.vertical
    const horiz = eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal)
    return Math.abs(vert) + Math.abs(horiz)
  }

  estimatedTime(peak) {
    if (peak === true) {
      return this.blocksTravelled() / 2
    }
    return this.blocksTravelled() / 3
  }
}
