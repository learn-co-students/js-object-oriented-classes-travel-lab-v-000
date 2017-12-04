
class Driver {
  constructor(name, dateStarted) {
    this.name = name
    this.startDate = new Date(dateStarted)
  }
  yearsExperienceFromBeginningOf(endYear) {
    return endYear - this.startDate.getFullYear()-1
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    return Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)) + Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical)
  }

  estimatedTime(peak) {
    if (peak) {
      console.log(peak, this.blocksTravelled())
      return this.blocksTravelled() /2
    } else {
      console.log(peak, this.blocksTravelled())
      return this.blocksTravelled() /3
    }
  }
}
