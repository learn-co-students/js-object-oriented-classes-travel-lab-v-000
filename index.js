const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    const endDate = new Date (year, 0, 1)
    return Math.floor((endDate - this.startDate) / (24*60*60*1000*365))
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    const horizontal = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)
    const vertical = this.endingLocation.vertical - this.beginningLocation.vertical
    return Math.abs(horizontal + vertical)
  }

  estimatedTime(peak) {
    if (peak){
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}
