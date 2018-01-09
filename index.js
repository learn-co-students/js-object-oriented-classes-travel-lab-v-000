class Driver {
  constructor (name, joined) {
    this.name = name;
    this.startDate = new Date(joined);
  }

  yearsExperienceFromBeginningOf (year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled () {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    const verticalStart = parseInt(this.beginningLocation.vertical);
    const verticalEnd = parseInt(this.endingLocation.vertical);

    if (verticalStart >= verticalEnd) {
      var vDistance = verticalStart - verticalEnd;
    } else {
      var vDistance = verticalEnd - verticalStart;
    }

    let beginning = eastWest.indexOf(this.beginningLocation.horizontal);
    let ending = eastWest.indexOf(this.endingLocation.horizontal);
    if (beginning >= ending) {
      var hDistance = beginning - ending;
    } else {
      var hDistance = ending - beginning;
    }

    return hDistance + vDistance;
  }

  estimatedTime (peak) {
    if (peak) {
      var minutes = this.blocksTravelled() / 2;
    } else {
      var minutes = this.blocksTravelled() / 3;
    }

    return minutes;
  }
}
