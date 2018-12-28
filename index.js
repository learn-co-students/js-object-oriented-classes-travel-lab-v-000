let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
      this.beginningLocation = beginningLocation
      this.endingLocation = endingLocation
  }
  avenueNum(street) {
      return eastWest.indexOf(street)
  }
  blocksTravelled() {
      let horizontalDistance = this.avenueNum(this.endingLocation.horizontal) - this.avenueNum(this.beginningLocation.horizontal)
      let verticalDistance = parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical)
      return Math.abs(horizontalDistance) + Math.abs(verticalDistance)
  }
  
  estimatedTime(peak) {
    if (peak){
        return (this.blocksTravelled()/ 2)
    } else {
        return (this.blocksTravelled()/ 3)
    }
  }
}