class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }


  yearsExperienceFromBeginningOf(year) {
    let startYear = this.startDate.getFullYear()
    return(year - startYear)
  }

}

let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  newThing(avenue) {
    return eastWest.indexOf(avenue)
  }

  blocksTravelled() {
    let streetBlocks = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical)
    let avenueBlocks = Math.abs(this.newThing(this.endingLocation.horizontal) - this.newThing(this.beginningLocation.horizontal))
    return streetBlocks + avenueBlocks
  }

  estimatedTime(peak) {
    if (peak) {
      return(this.blocksTravelled()/2)
    }
    else {
      return(this.blocksTravelled()/3)
    }
  }
}
