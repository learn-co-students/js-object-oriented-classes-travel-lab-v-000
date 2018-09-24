let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, date_string) {
    this.name = name;
    this.startDate = new Date(date_string);
  }
  yearsExperienceFromBeginningOf(year) {
    return new Date(String(year)).getFullYear() - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled() {
    let vertDistance = Math.abs(Number(this.beginningLocation.vertical) - Number(this.endingLocation.vertical));
    let hor1 = 0;
    let hor2 = 0;
    for (const index in eastWest) {
      if (eastWest[index] === this.beginningLocation.horizontal) {
        hor1 = index;
      }
      if (eastWest[index] === this.endingLocation.horizontal) {
        hor2 = index;
      }
    }
    return vertDistance + (hor2 - hor1);
  }
  estimatedTime(peak = false) {
    let blocks = this.blocksTravelled();
    if (peak === true) {
      return Math.round(blocks / 2);
    } else {
    return Math.round(blocks / 3);
    }
  }
}
