class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  };
};

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
    this.eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
  };

  blocksTravelled() {
    return Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical) + Math.abs(this.eastWest.indexOf(this.endingLocation.horizontal) - this.eastWest.indexOf(this.beginningLocation.horizontal));
  };

  estimatedTime(peakHours) {
    if (peakHours) {
      return Math.ceil(this.blocksTravelled()/2);
    } else {
      return Math.ceil(this.blocksTravelled()/3);
    };
  };
};
