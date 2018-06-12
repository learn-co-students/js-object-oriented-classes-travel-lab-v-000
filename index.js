let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
yearsExperienceFromBeginningOf(year) {
  let endDate = new Date(year, 1)
  let years = Math.ceil((endDate - this.startDate)/31556952000)
  return years
}
}

class Route {
  constructor(beginningLocation, endingLocation) {
      this.beginningLocation = beginningLocation
      this.endingLocation = endingLocation
  }

aveToIndex(avenue) {
return eastWest.indexOf(avenue)
}

blocksTravelled() {
  let horizontalNum = this.aveToIndex(this.endingLocation.horizontal) - this.aveToIndex(this.beginningLocation.horizontal)
  let verticalNum =  (this.endingLocation.vertical) - (this.beginningLocation.vertical)
  return horizontalNum + verticalNum
    }

estimatedTime(peakTravel) {
  if(peakTravel)
  return this.blocksTravelled()/ 2
  else
  return this.blocksTravelled()/3

}
}
