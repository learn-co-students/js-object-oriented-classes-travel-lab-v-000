class Driver {
   constructor(name, startDate) {
     this.name = name;
     this.startDate = new Date(startDate);
   }

   startDate() {
     return startDate;
   }

   yearsExperienceFromBeginningOf(year) {
     return year-this.startDate.getFullYear();
   }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];
    const hblocks = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal)-eastWest.indexOf(this.endingLocation.horizontal));
    const vblocks = Math.abs(this.beginningLocation.vertical-this.endingLocation.vertical);
    return hblocks+vblocks;
  }
  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled()/2;
    }
    return this.blocksTravelled()/3;
  }
}
