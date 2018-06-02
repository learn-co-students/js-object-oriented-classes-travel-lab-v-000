class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = [
      '1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 
      'Madison Avenue', '5th Avenue'
    ];

    const vertDistance = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical); 
    const horzDistance = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal) );

    return vertDistance + horzDistance; 
  }

  estimatedTime(peakHours = false) {
    if (peakHours) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
