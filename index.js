class Driver {
  constructor(name, joining_date) {
    this.name = name;
    this.startDate = new Date(joining_date);
  }


  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 1, 1)
    let totalYears = (endDate - this.startDate)/(365*24*60*60*1000)
    return parseInt(totalYears)
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }


  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let hor = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
    let vert = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    return hor + vert;
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}
