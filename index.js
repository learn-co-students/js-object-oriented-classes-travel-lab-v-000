
class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    let numberYear = parseInt(year);
    let startDateYear = this.startDate.getFullYear();
    return numberYear - startDateYear;
    // debugger
  }



}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let vEnding = parseInt(this.endingLocation.vertical)
    let vBeginning = parseInt(this.beginningLocation.vertical);
    let eastWest = ['1st Avenue','2nd Avenue','3rd Avenue','Lexington Avenue','Park','Madison Avenue','5th Avenue'];
    let hEnding = eastWest.indexOf(this.endingLocation.horizontal)
    let hBeginning = eastWest.indexOf(this.beginningLocation.horizontal)
    //debugger
    // console.log(hBeginning)
    // console.log(hEnding)
   return (vEnding - vBeginning) + (hEnding - hBeginning)
  }

  // The method returns the number of
  // minutes estimated for the trip.
  estimatedTime(peak) {
  // The estimated time depends on the distance in blocks
  // and whether the trip is occurring during peak hours or off peak hours.

  if (peak === true) {
    // while during peak hours
    // - two blocks in a minute.
    console.log(this.blocksTravelled()/2)
    let blocksOnPeak = this.blocksTravelled()/ 2;
    return Math.ceil(blocksOnPeak)
  } else {
    // During off peak hours,
    // - three blocks in a minute,
    console.log(this.blocksTravelled()/3)
    let blocksOnPeak = this.blocksTravelled()/ 3;
    return Math.ceil(blocksOnPeak)
    }
  }
}
