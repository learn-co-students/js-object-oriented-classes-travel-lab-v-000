class Driver {
   constructor(name, startDate) {
     this.name = name;
     this.startDate = new Date(startDate);
   };

   yearsExperienceFromBeginningOf(endDate) {
     const years = endDate - this.startDate.getFullYear() -1;
     return years;
   };
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    const vertical = this.endingLocation.vertical - this.beginningLocation.vertical;
    const horizontal = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);
    const travelled = vertical + horizontal;
    return travelled;
  }

 estimatedTime(peakHours) {

  if (peakHours === true) {
    const estimate = this.blocksTravelled() / 2;
    return estimate;
  } else {
    const estimate = this.blocksTravelled() / 3;
    return estimate;
  }

}

};
