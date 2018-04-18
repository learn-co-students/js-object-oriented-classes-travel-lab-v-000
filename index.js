class Driver {
  constructor (name, dateString) {
    this.name = name;
    this.startDate = new Date (dateString);
  }

  yearsExperienceFromBeginningOf (endDate) {
    return endDate - this.startDate.getFullYear();
  }
};

class Route {
  constructor (beg, end) {
    this.beg = beg;
    this.end = end;
  }

  static eastWest () {
    return [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park', 'Madison Avenue',
      '5th Avenue'
    ];
  }

  horizontalBlocks () {
    let eastWest = Route.eastWest();
    return Math.abs(eastWest.indexOf(this.beg.horizontal) - eastWest.indexOf(this.end.horizontal));
  }

  verticalBlocks () {
    return Math.abs(this.end.vertical - this.beg.vertical);
  }

  blocksTravelled () {
    return this.horizontalBlocks() + this.verticalBlocks();
  }

  estimatedTime (peak) {
    const blocksTravelled = this.blocksTravelled();
    if (peak === true) {
      return (blocksTravelled/2);
    } else {
      return (blocksTravelled/3);
    }
  }
}
