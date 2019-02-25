class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(year) {
    return new Date("Jan 01, " + year).getFullYear() - this.startDate.getFullYear();
  };
};

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };

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

    function horizontalBlock(avenue) {
        return eastWest.findIndex(function(block) {return block === avenue;});
    };

    const horizontalDistance = horizontalBlock(this.endingLocation.horizontal) - horizontalBlock(this.beginningLocation.horizontal);
    const verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical;

    return Math.abs(horizontalDistance) + Math.abs(verticalDistance);
  };

  estimatedTime(peak) {
    if(peak) {
      return this.blocksTravelled()/2;
    }
    else {
      return this.blocksTravelled()/3;
    };
  };
};
