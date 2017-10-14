class Driver {
  constructor(name, startdate) {
    this.name = name
    this.startDate = new Date(startdate)
  }
  yearsExperienceFromBeginningOf(enddate) {
   return enddate - this.startDate.getFullYear() - 1
  }
}

class Route { 
constructor(beginningLocation, endingLocation) {
 this.beginningLocation = beginningLocation
 this.endingLocation = endingLocation
}
 
 blocksTravelled() {
  let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
  const verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
  const horizontalDistance = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)
  return verticalDistance + horizontalDistance
 }

 estimatedTime(timeInPeakHours) {
  if (timeInPeakHours) { return this.blocksTravelled() / 2}
    else  {return this.blocksTravelled() / 3}
 }
}


