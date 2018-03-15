let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  startDate(){
    return startDate.toString();
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear();
  }

}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.endingLocation = endingLocation
    this.beginningLocation = beginningLocation
  }

  blocksTravelled(){
    let hDistance = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)
    let vDistance = this.endingLocation.vertical - this.beginningLocation.vertical
    return hDistance + vDistance
  }

  estimatedTime(peak){
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}
