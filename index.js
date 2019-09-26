class Driver {
  constructor (name, startDate) {
    this.name = name
    this.startDate = new Date (startDate)
  }

  yearsExperienceFromBeginningOf (endDate) {
    return endDate - this.startDate.getFullYear()
  }
}

class Route {
  constructor (beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled (beginningLocation,endingLocation) {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    const horizontal = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
    const vertical = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    return horizontal + vertical
  }

  estimatedTime (peak = false) {
    if (peak) {
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}
