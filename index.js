class Driver {
  constructor (name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
    this.eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
  }

  blocksTravelled() {
    let totalBlocks = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical)
    totalBlocks += Math.abs(this.eastWest.indexOf(this.endingLocation.horizontal) - this.eastWest.indexOf(this.beginningLocation.horizontal))
    return totalBlocks
  }

  estimatedTime(peak) {
    let blocks = this.blocksTravelled()
    if (peak) {
      return blocks/2
    }
    else {
      return blocks/3
    }
  }
}
