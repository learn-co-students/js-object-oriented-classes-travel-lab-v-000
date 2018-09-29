class Driver {
  constructor(name, date) {
    this.name = name;
    this.startDate = new Date(date);
  }

  yearsExperienceFromBeginningOf(year) {
    const argDate = new Date(year, 0);
    const argYear = argDate.getFullYear();
    const driverYear = this.startDate.getFullYear();
    return argYear - driverYear;
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

    const beginningStreet = this.beginningLocation.vertical;
    const beginningAve = this.beginningLocation.horizontal;
    const endingStreet = this.endingLocation.vertical;
    const endingAve = this.endingLocation.horizontal;

    const sTrav = Math.abs(endingStreet - beginningStreet);

    let begAveNum;
    let endAveNum;
    var i;
    for (i = 0; i < 7; i++) {
        if (beginningAve == eastWest[i]) {
          begAveNum = i;
        }
        if (endingAve == eastWest[i]) {
          endAveNum = i;
        }
    }

    const avTrav = Math.abs(endAveNum - begAveNum);
    return avTrav + sTrav;
  }

  estimatedTime(bool = false){
    const trav = this.blocksTravelled()
    if (bool) {
      return trav/2;
    } else {
      return trav/3;
    }
  }
}
