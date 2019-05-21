let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];




class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(year) {
    let dateVariable = new Date(year, 0);
    let variableYear = dateVariable.getFullYear();
    let startYear = this.startDate.getFullYear();
    return variableYear - startYear;
  };
};

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let verticalBlocks = this.beginningLocation.vertical - this.endingLocation.vertical;
    let horizontalStart = eastWest.indexOf(this.beginningLocation.horizontal);
    let   horizontalEnd = eastWest.indexOf(this.endingLocation.horizontal);
    let   horizontalBlocks = horizontalStart - horizontalEnd;
    return -(verticalBlocks + horizontalBlocks);
  }

  estimatedTime(peakHours) {
    if(peakHours) {
      return this.blocksTravelled()/2;
    } else {
      return this.blocksTravelled()/3;
    };

  }
}
