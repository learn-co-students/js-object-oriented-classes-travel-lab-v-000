


class Driver {
  constructor(name, date) {
    this.name = name
    this.date = date
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(year) {
    let x = this.startDate.getFullYear() + 1
    return year - x
  }
}


let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']


class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  avenueToInteger(avenue){
    return eastWest.indexOf(avenue)
  }

  blocksTravelled() {
    let horizontalChange = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal)
    let verticalChange = this.endingLocation.vertical - this.beginningLocation.vertical
    return (Math.abs(horizontalChange)) + (Math.abs(verticalChange))
  }

  estimatedTime(peak){
    if(peak) {
      return this.blocksTravelled() / 2
    }
    else {
      return this.blocksTravelled() / 3
    }
  }
}
