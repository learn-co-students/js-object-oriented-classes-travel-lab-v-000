class Driver {
  constructor(name, start) {
    this.name = name;
    this.startDate = new Date(start);
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


  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue',
     'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

      return Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal)) +
       Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
  }

  estimatedTime(arg) {
    if (arg === true) {
      return this.blocksTravelled() * 1/2}
    else {
      return this.blocksTravelled() * 1/3}
  }
}
