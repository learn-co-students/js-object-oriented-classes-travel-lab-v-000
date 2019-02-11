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

    let startingAvenue = this.beginningLocation.horizontal;
    let startingStreet = Number(this.beginningLocation.vertical);
    let endingAvenue = this.endingLocation.horizontal;
    let endingStreet = Number(this.endingLocation.vertical);

    let startingAvenueIndex = eastWest.findIndex(avenue => avenue == startingAvenue);
    let endingAvenueIndex = eastWest.findIndex(avenue => avenue == endingAvenue);
    let avenueDistanceTravelled = 0;
    let streetDistanceTravelled = 0;

    if (startingAvenueIndex > endingAvenueIndex) {
      avenueDistanceTravelled = (startingAvenueIndex + 1) - (endingAvenueIndex + 1)
    } else {
      avenueDistanceTravelled = (endingAvenueIndex + 1) - (startingAvenueIndex + 1)
    }

    if (startingStreet > endingStreet) {
      streetDistanceTravelled = startingStreet - endingStreet
    } else {
      streetDistanceTravelled = endingStreet - startingStreet
    }

    return avenueDistanceTravelled + streetDistanceTravelled
  }

  estimatedTime(arg) {
    let timeTravelled;

    if (arg == true) {
      timeTravelled = (this.blocksTravelled() / 2)
    } else {
      timeTravelled = (this.blocksTravelled() / 3)
    }
    return Math.ceil(timeTravelled)
  }

}
