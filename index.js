
class Driver {
  constructor(name, startDate, yearsExperienceFromBeginningOf) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    let x = this.startDate.getFullYear() - year
    return Math.abs(x + 1)
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  avenueInteger(ave) {
    return eastWest.indexOf(ave)
  }

  blocksTravelled() {
      let horizontalDistance = this.avenueInteger(this.endingLocation.horizontal) - this.avenueInteger(this.beginningLocation.horizontal)
      let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
      return horizontalDistance + verticalDistance
    }

  estimatedTime(peak){
    if(peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}
