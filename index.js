
class Driver {
  constructor(name, join_day) {
    this.name = name
    this.join_day = join_day
    this.startDate = new Date(this.join_day)
  }

  yearsExperienceFromBeginningOf (year) {
    let exp = (year - this.startDate)/1000;
    exp /= (60*60*24);
    return Math.abs(Math.round(exp/365.25))-3;
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

    let vDiff = Math.abs(this.beginningLocation['vertical'] - this.endingLocation['vertical']);
    let hDiff = Math.abs((eastWest.indexOf(this.beginningLocation['horizontal'])+1) -
    (eastWest.indexOf(this.endingLocation['horizontal'])+1));

    return vDiff + hDiff;
  }

  estimatedTime(peak) {
    let result = 0;
    let blocks = this.blocksTravelled();
    if (peak === true) {
      result = blocks/2;
    } else {
      result = blocks/3;
    }

    return result;
  }
}
