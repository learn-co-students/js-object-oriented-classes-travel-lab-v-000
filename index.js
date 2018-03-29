const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

function avenues(start, end) {
  i = eastWest.indexOf(start)
  j = eastWest.indexOf(end)

  return Math.abs(i - j)
}

class Driver {
  constructor(name, date) {
    this.name = name
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    const streetDistance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    const avenueDistance = avenues(this.beginningLocation.horizontal, this.endingLocation.horizontal)

    return streetDistance + avenueDistance
  }

  estimatedTime(peak) {
    const div = (peak ? 2 : 3)
    return this.blocksTravelled() / div
  }
}
