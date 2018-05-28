class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route{
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  blocksTravelled () {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let a = eastWest.indexOf(this.beginningLocation.horizontal)
    let b = eastWest.indexOf(this.endingLocation.horizontal)
      if (a >= b && this.beginningLocation.vertical >= this.endingLocation.vertical) {
        return (a - b) + (this.beginningLocation.vertical - this.endingLocation.vertical)
      } else if (a <= b && this.beginningLocation.vertical >= this.endingLocation.vertical) {
        return (b - a) + (this.beginningLocation.vertical - this.endingLocation.vertical)
      } else if (a >= b && this.beginningLocation.vertical <= this.endingLocation.vertical){
        return (a - b) + (this.endingLocation.vertical - this.beginningLocation.vertical)
      } else {
        return (b - a) + (this.endingLocation.vertical - this.beginningLocation.vertical)
      }
  }
  estimatedTime(peak) {
    if (peak === true){
      return this.blocksTravelled() / 2
    } else {
    return this.blocksTravelled() / 3
    }
  }
}
