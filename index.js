let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(yearsOfExp) {
    return yearsOfExp - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    // debugger;
    this.beginningLocationHorizontal = beginningLocation.horizontal;
    this.beginningLocationVertical = beginningLocation.vertical;
    this.endingLocationHorizontal = endingLocation.horizontal;
    this.endingLocationVertical = endingLocation.vertical;
  }

  blocksTravelled() {
    return this.calculateVertical(this.beginningLocationVertical, this.endingLocationVertical) + this.calculateHorizontal(this.beginningLocationHorizontal, this.endingLocationHorizontal);
  }

  calculateVertical(beginningLocationVertical, endingLocationVertical) {
    return Math.abs(beginningLocationVertical - endingLocationVertical);
  }

  calculateHorizontal(beginningLocationHorizontal, endingLocationHorizontal) {
    let beginingHorizontalBlock = 0;
    let endingHorizontalBlock = 0;
    for (let i = 0; i < eastWest.length; i++) {
      if (beginningLocationHorizontal === eastWest[i]) {
        beginingHorizontalBlock = i;
      }
      if (endingLocationHorizontal === eastWest[i]) {
        endingHorizontalBlock = i;
      }
    }
    return Math.abs(beginingHorizontalBlock - endingHorizontalBlock);
  }

  estimatedTime(peakHours) {
    if (peakHours) {
      return Math.round(this.blocksTravelled() / 2);
    } else {
      return Math.round(this.blocksTravelled() / 3);
    }
  }
}
