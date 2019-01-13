class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
};

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
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };

  blocksTravelled() {
    const horizontalTravelled = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);

    const verticalTravelled = this.endingLocation.vertical - this.beginningLocation.vertical;
    return horizontalTravelled + verticalTravelled;
  };

  estimatedTime(peakHours) {
    blocks = this.blocksTravelled();
    if (this.peakHours === true)
    {
      return blocks / 2;
    } else {
      return blocks /3;
    };
  };
};
