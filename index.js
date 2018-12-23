class Driver{
  constructor(name, startDate){
  this.name = name
  this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(yr){
    let startYr = this.startDate.getFullYear()
    return Number(yr) - startYr
  }
}

  class Route{
    constructor(beginningLocation, endLocation){
    this.beginningLocation = beginningLocation
    this.endLocation = endLocation
  }

  blocksTravelled(){
    const horizontalAvenues = {
      1: "1st Avenue",
      2: "2nd Avenue",
      3: "3rd Avenue",
      4: "Lexington",
      5: "Park",
      6: "Madison",
      7: "5th Avenue",
      8: "6th Avenue",
      9: "7th Avenue",
      10: "8th Avenue",
      11: "9th Avenue",
      12: "10th Avenue",
      13: "11th Avenue",
      14: "12th Avenue"
    }
    const hAvenuesArray = Object.values(horizontalAvenues);

    const vDistance = Math.abs(Number(this.endLocation.vertical) - Number(this.beginningLocation.vertical))
    const hDistance = Math.abs(hAvenuesArray.indexOf(this.endLocation.horizontal) - hAvenuesArray.indexOf(this.beginningLocation.horizontal))
    return vDistance + hDistance
  }

  estimatedTime(peak){
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }

  }

}
