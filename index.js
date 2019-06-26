class Driver {
  constructor(name, string) {
    this['name'] = name
    this['startDate'] = new Date(string)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  };

  blocksTravelled() {

  let verticalEnd = this.endingLocation.vertical;
  let verticalBeg = this.beginningLocation.vertical;
  let horizontalEnd = this.endingLocation.horizontal;
  let horizontalBeg = this.beginningLocation.horizontal;

  let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

  let index1 = eastWest.indexOf(horizontalEnd);
  let index2 = eastWest.indexOf(horizontalBeg);
  let hDistance = Math.abs(index1-index2);
  let vDistance = Math.abs(verticalEnd - verticalBeg);
  return hDistance + vDistance
    }

  estimatedTime(peak) {
    if (peak === true) {
    debugger
    return this.blocksTravelled() / 2
  } else {
    return this.blocksTravelled() / 3
    }
  }
}
