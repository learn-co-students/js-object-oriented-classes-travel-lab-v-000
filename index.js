class Driver {
  constructor (name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 1, 1);
    let yearsExperience = (endDate - this.startDate) / (365 * 24 * 60 * 60 * 1000);
    return parseInt(yearsExperience);
  }
}
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  indexOfAve(ave) {
    return eastWest.indexOf(ave);
  }
  blocksTravelled() {
    let horizontal = this.indexOfAve(this.beginningLocation.horizontal) - this.indexOfAve(this.endingLocation.horizontal)
    let vertical = this.beginningLocation.vertical - this.endingLocation.vertical;
    return Math.abs(horizontal) + Math.abs(vertical)
  }
  estimatedTime() {}
}
