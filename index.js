class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    let beg = new Date(year, 1).getFullYear();
    return beg - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
     this.beginningLocation = beginningLocation;
     this.endingLocation = endingLocation;
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

    let hz = (parseInt(eastWest.indexOf(this.endingLocation.horizontal)) + 1) - (parseInt(eastWest.indexOf(this.beginningLocation.horizontal)) + 1);
    let vert = parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical)

    return hz + vert;
   }

   estimatedTime(bool) {
     let peak = bool

     if (peak) {
       return this.blocksTravelled() / 2;
     } else {
       return this.blocksTravelled() / 3;
     }
   }
}
