class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    const end = new Date(year)
    const start = this.startDate.getFullYear()
    return end.getTime() - start;
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    const startingAvenue = this.beginningLocation.horizontal
    const endingAvenue = this.endingLocation.horizontal
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    const startingAveValue = eastWest.findIndex(function(element) {
      return element === startingAvenue
    });
    const endingAveValue = eastWest.findIndex(function(element) {
      return element === endingAvenue
    });
    const eastWestDistance = Math.abs(endingAveValue - startingAveValue)
    const northSouthDistance = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical)
    return northSouthDistance + eastWestDistance
  }

  estimatedTime(arg) {
    const distance = this.blocksTravelled()
    if (arg) {
      return distance / 2
    } else {
      return distance / 3
    }
  }

}
