let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    let beginningYear = this.startDate.getFullYear();
    return year - beginningYear;
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let upDown = parseInt(this.endingLocation.vertical - this.beginningLocation.vertical)
    let leftRight = parseInt(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal))
    return upDown + leftRight;
  }

  estimatedTime(peak) {
    if (peak) {
        return this.blocksTravelled()/2;
    } else {
        return this.blocksTravelled()/3;
    }
  }

}
