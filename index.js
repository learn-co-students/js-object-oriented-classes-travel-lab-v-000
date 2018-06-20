let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, date){
    this.name = name;
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(date){
    let endDate = new Date(date, 1, 1)
    return endDate.getYear() - this.startDate.getYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  aveToInt(ave) {
    return eastWest.indexOf(ave)
  }
  blocksTravelled(){
    let horizontalDistance = this.aveToInt(this.endingLocation.horizontal) - this.aveToInt(this.beginningLocation.horizontal)
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
    return (Math.abs(horizontalDistance) + Math.abs(verticalDistance))
  }
  estimatedTime(peak){
    if(peak){
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}
