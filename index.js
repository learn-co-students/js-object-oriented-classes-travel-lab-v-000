// can create a Driver with a name and startDate
// sets the driver startDate as a date object
class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
  // calculates the number of years driven given an endDate
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    // calculates the number of blocksTravelled
    if (this.beginningLocation.horizontal == this.endingLocation.horizontal) {
      return this.endingLocation.vertical - this.beginningLocation.vertical
    }
    // calculates the number of horizontal blocks travelled
    if (this.beginningLocation.vertical == this.endingLocation.vertical) {
      return eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)
    }
    // combines horizontal and vertical blocks travelled
    const h = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)
    const v = this.endingLocation.vertical - this.beginningLocation.vertical
    return h + v
  }
  // estimates time in minutes, with travel time of three blocks in a minute
  // estimates time in minutes, with travel time of two blocks in a minute during peak hours
  estimatedTime() {
    if (arguments.length) {
      return this.blocksTravelled() / 2
    }
    else return this.blocksTravelled() / 3
  }
}
