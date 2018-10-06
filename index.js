class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return new Date(endDate).getUTCFullYear() - this.startDate.getUTCFullYear();
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let horizontal = eastWest.indexOf(this.endingLocation["horizontal"]) - eastWest.indexOf(this.beginningLocation["horizontal"]);
    let vertical = this.endingLocation["vertical"] - this.beginningLocation["vertical"];
    return horizontal + vertical;
  }

  estimatedTime(peak) {
    return peak ? this.blocksTravelled()/2 : this.blocksTravelled()/3;
  }
}
