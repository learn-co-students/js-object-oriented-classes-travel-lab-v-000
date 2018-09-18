let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(xyear){
    return xyear - this.startDate.getFullYear() - 1
  }
}

class Route {
  constructor(beginningLocation, endLocation) {
    this.beginningLocation = beginningLocation
    this.endLocation = endLocation
  }
  blocksTravelled () {
    return Math.abs(this.beginningLocation.vertical - this.endLocation.vertical) + Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endLocation.horizontal) )
  }
  estimatedTime (boolean) {
    debugger
    if (boolean) {
      return this.blocksTravelled () / 2
    } else {
      return this.blocksTravelled () / 3
    }
  }
}
