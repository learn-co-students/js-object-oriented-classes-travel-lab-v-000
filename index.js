class Driver {

  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  } 

}


class Route {
  constructor(beginningLocation, endingLocation)  {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let horizontal = (eastWest.indexOf(this.beginningLocation.horizontal)) - (eastWest.indexOf(this.endingLocation.horizontal));
    let vertical = (this.beginningLocation.vertical - this.endingLocation.vertical);
    return Math.abs(horizontal + vertical)
  }

  estimatedTime(peakHour) {
    let blocks = this.blocksTravelled();
    return peakHour ? blocks/2 : blocks/3;
  }
}