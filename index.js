class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(date) {
    return date - this.startDate.getFullYear();
  }

}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  horizontalBlocksTravelled() {
    let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    if (this.beginningLocation.horizontal !== this.endingLocation.horizontal) {
      const a = eastWest.indexOf(this.beginningLocation.horizontal)
      const b = eastWest.indexOf(this.endingLocation.horizontal)
      return a > b ? a - b : b - a
    } else {
      return 0;
    }
  }

  verticalBlocksTravelled() {
    if (this.beginningLocation.vertical !== this.endingLocation.vertical) {
      const a = this.beginningLocation.vertical;
      const b = this.endingLocation.vertical;
      return a > b ? a - b : b - a;
    }
    else {
      return 0;
    }
  }

  blocksTravelled() {
    return this.horizontalBlocksTravelled() + this.verticalBlocksTravelled()
  }

  estimatedTime(peak) {
    return (peak ? this.blocksTravelled() /2 : this.blocksTravelled() / 3);
  }
}
