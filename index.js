
class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate =  new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    return year-this.startDate.getFullYear()
  }
}

class Route {

  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
    this.eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
  }

  blocksTravelled() {
    console.log(this.endingLocation.vertical)
    let vertical = this.endingLocation.vertical - this.beginningLocation.vertical
    let horizontal = this.eastWest.indexOf(this.endingLocation.horizontal) - this.eastWest.indexOf(this.beginningLocation.horizontal)
    return vertical + horizontal
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }

}
