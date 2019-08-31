class Driver {
  constructor(name, stringDate) {
    this.name = name
    this.startDate = new Date(stringDate)
  }
  yearsExperienceFromBeginningOf(year) {
    const startYear = this.startDate.getFullYear()
    return year - startYear
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    const northSouthBlocks = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    const eastWestBlocks = Math.abs((eastWest.indexOf(this.beginningLocation.horizontal)+1) - (eastWest.indexOf(this.endingLocation.horizontal)+1))
    return northSouthBlocks + eastWestBlocks
  }
  estimatedTime(peakHours = false) {
    if (peakHours === true) {
      return this.blocksTravelled()/2

    } else {
      return this.blocksTravelled()/3
    }
  }
}
