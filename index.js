class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getUTCFullYear();
  }
}
let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];
class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }


  locationToNumber(location) {
    return eastWest.findIndex(function (element) {return location["horizontal"] === element})
  }

  blocksTravelled() {
    return Math.abs(this.locationToNumber(this.endingLocation) - this.locationToNumber(this.beginningLocation)) + Math.abs(this.beginningLocation["vertical"] - this.endingLocation["vertical"])
  }

  estimatedTime(peakHour = false) {
    let multiplier = 3
    if (peakHour === true) {
      multiplier = 2
    }
    return this.blocksTravelled() / multiplier
  }
}
