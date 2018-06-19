class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear()
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }


  blocksTravelled() {
    let hStart = eastWest.indexOf(this.beginningLocation.horizontal)
    let hEnd = eastWest.indexOf(this.endingLocation.horizontal)
    return (this.endingLocation.vertical - this.beginningLocation.vertical) + (hEnd - hStart)
  }

  estimatedTime(peak = false) {

    if (peak === true) {
      return this.blocksTravelled() / 2
    }
    return this.blocksTravelled() / 3

  }
}
