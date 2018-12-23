class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year) {
    const theYear = new Date(year).getFullYear()
    return theYear - this.startDate.getFullYear() + 1
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  blocksTravelled() {
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];

    if (this.beginningLocation["horizontal"] === this.endingLocation["horizontal"]) {
      return this.endingLocation["vertical"] - this.beginningLocation["vertical"]
    } else if (this.beginningLocation["vertical"] === this.endingLocation["vertical"]) {
      return eastWest.indexOf(this.endingLocation["horizontal"]) - eastWest.indexOf(this.beginningLocation["horizontal"])
    } else {
      return (this.endingLocation["vertical"] - this.beginningLocation["vertical"]) + (eastWest.indexOf(this.endingLocation["horizontal"]) - eastWest.indexOf(this.beginningLocation["horizontal"]))
    }
  }
  estimatedTime(traffic) {
    if (traffic) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}
