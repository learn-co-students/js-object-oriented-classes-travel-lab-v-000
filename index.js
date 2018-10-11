class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDateYear) {
    return endDateYear - this.startDate.getFullYear();
    debugger
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let vertDistance = this.endingLocation.vertical - this.beginningLocation.vertical
    let horizDistance = (eastWest.indexOf(this.endingLocation.horizontal)) - (eastWest.indexOf(this.beginningLocation.horizontal)) 
    return horizDistance + vertDistance;
  }

  estimatedTime(peak) {
    return peak ? (this.blocksTravelled() / 2) : (this.blocksTravelled() / 3)
  }

}
