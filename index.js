class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  blocksTravelled(){
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];

    const horizontalStart = this.beginningLocation.horizontal
    const horizontalEnd = this.endingLocation.horizontal
    const verticalStart = this.beginningLocation.vertical
    const verticalEnd = this.endingLocation.vertical

    const northSouthBlocks = Math.abs(verticalEnd - verticalStart)
    const eastWestBlocks = Math.abs(eastWest.indexOf(horizontalEnd) - eastWest.indexOf(horizontalStart))
    return northSouthBlocks + eastWestBlocks
  }

  estimatedTime(peak = false) {
    let rate = 3
    if(peak){
      rate = 2
    }
    return this.blocksTravelled() / rate
  }
}
