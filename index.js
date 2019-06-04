
class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endYear) {
    return endYear - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let vertical = Math.abs(parseInt(this.beginningLocation.vertical) - parseInt(this.endingLocation.vertical))
    let horizontal = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))

    return vertical + horizontal
  }

  estimatedTime(peak) {
    return peak ? this.blocksTravelled()/2 : this.blocksTravelled()/3
  }
}
