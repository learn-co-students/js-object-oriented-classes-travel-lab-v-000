class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate){
    return endDate - (this.startDate.getFullYear() + 1 )
  }

}


class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  avenueToInteger(avenue){

    return eastWest.indexOf(avenue)
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    const verticalDistance = parseInt(this.beginningLocation.vertical) - parseInt(this.endingLocation.vertical)

    const horizontalDistance = eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal)

    return Math.abs(verticalDistance) + Math.abs(horizontalDistance)
  }

  estimatedTime(peak){
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }

}
