class Driver {
  constructor(name, startDate) {
  this.name = name
  this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    const date = new Date(year, 1, 1)
    return date.getFullYear() - this.startDate.getFullYear()-1;
  }


}


  class Route {
    constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
    }

    blocksTravelled() {
    let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    const distA = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));
    const distB = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical)
    return distB + distA;
  }
   estimatedTime(peak) {
    if (peak){
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}
