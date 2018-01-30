class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf (endYear) {
    return endYear - this.startDate.getFullYear()
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }



  blocksTravelled () {
    let startIndex = eastWest.indexOf(this.beginningLocation.horizontal)
    let endIndex = eastWest.indexOf(this.endingLocation.horizontal)
    let totalBlocks = Math.abs(endIndex - startIndex) + Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical)
    return totalBlocks
  }

  estimatedTime (peakHours) {
    if (peakHours) {
      return this.blocksTravelled() / 2
    } else
      return this.blocksTravelled() / 3
  }
}
