class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear()
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let begAve = eastWest.indexOf(this.beginningLocation.horizontal);
    let endAve = eastWest.indexOf(this.endingLocation.horizontal);
    let avenueDistance = Math.abs(begAve - endAve);

    let streetDifference = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);

    return avenueDistance + streetDifference;
  }

  estimatedTime(peak) {
    let time = new Date().getHours();

    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }

  }
}
