let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year) {
    const yearsExperienced = year - 1 - this.startDate.getFullYear()
    return yearsExperienced
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  avenueToNumber(avenue) {
    return eastWest.indexOf(avenue)
  }
  blocksTravelled() {
    let verticalTravel = this.endingLocation.vertical - this.beginningLocation.vertical
    let horizontalTravel = this.avenueToNumber(this.endingLocation.horizontal) - this.avenueToNumber(this.beginningLocation.horizontal)
    return Math.abs(verticalTravel) + Math.abs(horizontalTravel)
  }
  estimatedTime(peakHours) {
    const blocks = this.blocksTravelled()
    if (peakHours) {
      return blocks/2
    }
    else {
      return blocks/3
    }
  }
}
