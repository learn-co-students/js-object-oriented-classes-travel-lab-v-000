class Driver {
  constructor (name, date) {
    this.name = name;
    this.startDate = new Date(date);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled () {
    let horizontalDistance = eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal);
    if (horizontalDistance < 0) { horizontalDistance *= -1 }

    let verticalDistance = parseInt(this.beginningLocation.vertical) - parseInt(this.endingLocation.vertical);
    if (verticalDistance < 0) { verticalDistance *= -1 }

    return horizontalDistance + verticalDistance;
  }

  estimatedTime (peak) {
    let dividend;
    if (peak === true) {
        dividend = 2;
    } else {
        dividend = 3;
    }
    return this.blocksTravelled () / dividend;
  }
}
