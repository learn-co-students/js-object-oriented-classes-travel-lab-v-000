let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year) {
    let today = Date.now()
    let yearsWorked = (today - this.startDate)/(1000*60*60*24*365)
    return parseInt(yearsWorked - 1)
  }
}


class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  avenueToInteger(avenue) {
    return eastWest.indexOf(avenue)
  }

  blocksTravelled(){
    let verticalBlocks = this.endingLocation.vertical - this.beginningLocation.vertical
    let horizontalBlocks = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal)

    return (verticalBlocks) + (horizontalBlocks)
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }

  }
}
