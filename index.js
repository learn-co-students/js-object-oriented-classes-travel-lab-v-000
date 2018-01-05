class Driver {
  constructor(name, date) {
    this.name = name;
    this.date = date;
    this.startDate = new Date(this.date);
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

    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    const horizontal = Math.abs((eastWest.indexOf(this.beginningLocation.horizontal) + 1) - (eastWest.indexOf(this.endingLocation.horizontal) + 1))
    const vertical = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)

    return horizontal + vertical
  }

  estimatedTime(peakHours) {
    const blocks = this.blocksTravelled()

    if (peakHours) {
      return blocks / 2
    } else {
      return blocks / 3
    }
  }
}
