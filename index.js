class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate){
    let time = endDate - this.startDate.getFullYear()
    return time
  }

}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }


  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let verticalBeginning = Number(this.beginningLocation.vertical)
    let horizontalBeginning = (eastWest.indexOf(this.beginningLocation.horizontal) + 1)
    let verticalEnding = Number(this.endingLocation.vertical)
    let horizontalEnding = (eastWest.indexOf(this.endingLocation.horizontal) + 1)

    let verticalTotal = Math.abs(verticalBeginning - verticalEnding)
    let horizontalTotal = Math.abs(horizontalBeginning - horizontalEnding)
    let fullTotal = verticalTotal + horizontalTotal
    return fullTotal
  }

estimatedTime(peak){
  let rideTime = 0
  if (peak) {
    rideTime = (this.blocksTravelled() / 2)}
  else {
    rideTime = (this.blocksTravelled() / 3)}
  return rideTime
}

}
