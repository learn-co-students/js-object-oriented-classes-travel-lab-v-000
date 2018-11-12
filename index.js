class Driver {

  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(currentYear) {
    return currentYear - this.startDate.getFullYear()
  }
}

class Route {

  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    let avenueStart = eastWest.indexOf(this.beginningLocation.horizontal) + 1
    let avenueEnd = eastWest.indexOf(this.endingLocation.horizontal) + 1

    let avenueBlocksTravelled = Math.abs(avenueStart - avenueEnd)
    let streetBlocksTravelled = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)

    return (streetBlocksTravelled + avenueBlocksTravelled)
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}


// returns the number of minutes of the trip
// During off peak hours, a driver travels three blocks in a minute,
// while during peak hours a driver travels an estimated two blocks in a minute.
