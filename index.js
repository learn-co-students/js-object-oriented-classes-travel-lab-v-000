
class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    let horizontalBlocks = 0
    let verticalBlocks = 0
    let horizontalBegin = eastWest.indexOf(this.beginningLocation.horizontal) + 1
    let horizontalEnd = eastWest.indexOf(this.endingLocation.horizontal) + 1

    if (horizontalBegin > horizontalEnd) {
      horizontalBlocks = horizontalBegin - horizontalEnd
      console.log(horizontalBlocks);
    } else {
      horizontalBlocks = horizontalEnd - horizontalBegin
      console.log(horizontalBlocks);
    }

    if (parseInt(this.beginningLocation.vertical) > parseInt(this.endingLocation.vertical)) {
      verticalBlocks = parseInt(this.beginningLocation.vertical) - parseInt(this.endingLocation.vertical)
      console.log(verticalBlocks);
    } else {
      verticalBlocks = parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical)
      console.log(verticalBlocks);
    }
    return horizontalBlocks + verticalBlocks
  }

  estimatedTime(peakHours) {
    if (peakHours) {
      return Math.ceil(this.blocksTravelled() / 2)
    } else {
      return Math.ceil(this.blocksTravelled() / 3)
    }
  }
}