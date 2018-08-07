class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - `${this.startDate.getFullYear()}` - 1
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  avenueToInt(ave) {
    return eastWest.indexOf(ave)
  }

  blocksTravelled() {

    let horizontalDist = this.avenueToInt(this.endingLocation.horizontal) - this.avenueToInt(this.beginningLocation.horizontal)
    let verticalDist = this.endingLocation.vertical - this.beginningLocation.vertical
    return (Math.abs(horizontalDist) + Math.abs(verticalDist))
  }

  estimatedTime(peak) {
    if(peak) {
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }

}
