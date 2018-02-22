class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate) {
    return (endDate - this.startDate.getFullYear())
  }
}

const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let horizontalBlocksTravelled = this.horizontalBlocks(this.beginningLocation.horizontal, this.endingLocation.horizontal)
    let verticalBlocksTravelled = this.verticalBlocks(this.beginningLocation.vertical, this.endingLocation.vertical)

    return horizontalBlocksTravelled + verticalBlocksTravelled
  }

  horizontalBlocks(beginningHorizontalLocation, endingHorizontalLocation) {
    return eastWest.indexOf(endingHorizontalLocation) - eastWest.indexOf(beginningHorizontalLocation)
  }

  verticalBlocks(beginningVerticalLocation, endingVerticalLocation) {
    return parseInt(endingVerticalLocation, 10) - parseInt(beginningVerticalLocation, 10)
  }

  estimatedTime(peakHours) {
    if (peakHours == true) {
      return Math.floor(this.blocksTravelled()/2)
    } else {
      return Math.floor(this.blocksTravelled()/3)
    }
  }
}