class Driver {
  constructor(name, startDate) {
    this.name=name
    this.startDate=new Date(startDate);
  }
  yearsExperienceFromBeginningOf(endDate) {
    return parseInt(endDate, 10)-parseInt(this.startDate.getFullYear(), 10);
  }
}

let eastWest = [
'1st Avenue',
'2nd Avenue',
'3rd Avenue',
'Lexington Avenue',
'Park',
'Madison Avenue',
'5th Avenue'
];

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation=beginningLocation;
    this.endingLocation=endingLocation;
  }
  blocksTravelled() {
    let x
    if (this.beginningLocation.horizontal===this.endingLocation.horizontal) {
      return Math.abs(parseInt(this.beginningLocation.vertical, 10)-
      parseInt(this.endingLocation.vertical, 10));
    }

    else
       x=( Math.abs(
        (
          eastWest.indexOf(this.beginningLocation.horizontal)
      - eastWest.indexOf(this.endingLocation.horizontal)
    )
      +
      (
        parseInt(this.beginningLocation.vertical, 10)
      - parseInt(this.endingLocation.vertical, 10)
    )
  ));
  console.log(x);
  return x
  }

  estimatedTime(rushHour) {
    return rushHour ? Math.round((this.blocksTravelled()) * .5) : Math.round((this.blocksTravelled()) * .333);
  }
}
