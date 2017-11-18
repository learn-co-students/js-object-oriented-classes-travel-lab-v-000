
class Driver {
  constructor (name, dateString) {
    this.name = name;
    this.dateString = dateString;
    this.startDate = new Date(this.dateString);
  }

  yearsExperienceFromBeginningOf(year) {
    // makes a date starting @ the beginning of the year passe in
    const startYearDate = new Date(year, 0, 1);

    // answer is returned into millseconds, hence date dif ms
    const dateDifMs = startYearDate - (this.startDate);

    // changes ms date back into a date based frm the start of time in 1970
    const dateRegDate = new Date(dateDifMs);

    // subtracts years from millseconds date w/start of CPU time year (epoch)
    // returns year
    return Math.abs(dateRegDate.getUTCFullYear() - 1970);
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue',
  'Park', 'Madison Avenue', '5th Avenue'];

class Route {
  constructor (beginLocationObj, endLocationObj) {
    this.beginningLocation = beginLocationObj;
    this.endingLocation = endLocationObj;
  }

  blocksTravelled() {
    const streetDif = (this.endingLocation.vertical) -
      (this.beginningLocation.vertical);

    const startAve = this.beginningLocation.horizontal;

    const endAve = this.endingLocation.horizontal;

    const aveDif = (eastWest.indexOf(endAve)) - (eastWest.indexOf(startAve));

    return streetDif + aveDif;
  }

  estimatedTime(peak) {
    return peak ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3;
  }
}
