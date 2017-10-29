class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year){
    return (year - this.startDate.getFullYear()) - 1
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let result = 0

    if(this.beginningLocation.vertical > this.endingLocation.vertical){
      result += (this.beginningLocation.vertical - this.endingLocation.vertical)
    } else {
      result += (this.endingLocation.vertical - this.beginningLocation.vertical)
    }

    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    if(eastWest.indexOf(this.beginningLocation.horizontal) > eastWest.indexOf(this.endingLocation.horizontal)) {
      result += (eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
    } else {
      result += (eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal))
    }
    return result
  }

  estimatedTime(peak){
    if(peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}