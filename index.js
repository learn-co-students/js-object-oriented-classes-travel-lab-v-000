class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf (year) {
    const currentYear = new Date(year, 0, 1);
    return currentYear.getFullYear() - this.startDate.getFullYear();
  };
}

class Route {
  constructor(beginingLocation, endingLocation) {
    this.beginingLocation = beginingLocation;
    this.endingLocation = endingLocation;
    this.eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
      ];
  };

  blocksTravelled () {
    const startAve = this.eastWest.indexOf(this.beginingLocation.horizontal);
    const endAve = this.eastWest.indexOf(this.endingLocation.horizontal);

    const startSt = this.beginingLocation.vertical;
    const endSt = this.endingLocation.vertical;

    return (endAve - startAve) + (endSt - startSt);
  };

  estimatedTime (peak) {
    const blocksCount = this.blocksTravelled();

    if (peak === true) {
      return blocksCount / 2;
    } else {
      return blocksCount / 3;
    };
  };
}
