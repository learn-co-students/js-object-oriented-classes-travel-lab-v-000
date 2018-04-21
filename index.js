class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return  (year - this.startDate.getFullYear());
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let result_v = this.beginningLocation['vertical'] - this.endingLocation['vertical'];

    let result_h = eastWest.indexOf(this.beginningLocation['horizontal']) - eastWest.indexOf(this.endingLocation['horizontal']);

    return Math.abs(result_v + result_h);
  }

  estimatedTime() {
    // return this.blocksTravelled() / 3;
    if (this.endingLocation.vertical < 46) {
      return Math.ceil(this.blocksTravelled() / 3);
    } else {
      return Math.ceil(this.blocksTravelled() / 2);
    }
  }
}
