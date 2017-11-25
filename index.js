
class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getFullYear() - 1
  }

}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  horizontalDistance() {
    const startingAvenue = this.beginningLocation.horizontal
    const startIndex = eastWest.indexOf(startingAvenue)
    const endIndex = eastWest.indexOf(this.endingLocation.horizontal)
    return Math.abs(startIndex - endIndex)
  }

  blocksTravelled() {
    let avenueDistance = this.horizontalDistance()
    let streetDistance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    return avenueDistance + streetDistance
  }

  estimatedTime(peak) {
    if(peak===true){

      return this.blocksTravelled() / 2
    }
    else {

      return this.blocksTravelled() / 3
    }
  }

}

