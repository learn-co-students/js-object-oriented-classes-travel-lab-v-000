class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  };
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    let horizontalDistance = eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal);

    let verticalDistance = this.beginningLocation.vertical - this.endingLocation.vertical;

    let result = Math.abs(verticalDistance) + Math.abs(horizontalDistance);

    return result;
  }

  estimatedTime(boolean) {
    if (boolean === true) {
      return this.blocksTravelled() / 2;
    } else {
        return this.blocksTravelled() / 3;
    }
  }

}
