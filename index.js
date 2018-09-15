class Driver {
  constructor(name, date) {
    this.name = name
    this.startDate = new Date(date)
  };

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 0, 1)
    let totalYears = (endDate - this.startDate) / (365*24*60*60*1000);

    return parseInt(totalYears);
  };
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']


class Route {

  constructor(beginningLocation = {horizontal: input, vertical: input}, endingLocation = {horizontal: input, vertical: input}) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }


  blocksTravelled() {
    var horizontalDistance = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)
    var verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical

    return horizontalDistance + verticalDistance
  }

  estimatedTime(peakhour) {
    if (peakhour === true) {
      return this.blocksTravelled() * 1/2
    } else {
      return this.blocksTravelled() * 1/3
    }
  }

}
