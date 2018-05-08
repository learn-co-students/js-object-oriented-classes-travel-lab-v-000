class Driver {
  constructor(name, startDateString) {
    this.name = name;
    this.startDate = new Date(startDateString);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

    const verticalTotal = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);

    let index1 = eastWest.findIndex(x => x === this.beginningLocation.horizontal);
    let index2 = eastWest.findIndex(x => x === this.endingLocation.horizontal);
    const horizontalTotal = Math.abs(index1 - index2);

    return verticalTotal + horizontalTotal;
  }

  estimatedTime(peak=false) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
