class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(year) {
    let startYear = this.startDate.getFullYear();
    return year - startYear;
  };
};

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };

  blocksTravelled(){
    // eastWest crosses over avenues, so vertical roads are avenues
    // northSouth crosses over streets, so horizontal roads are streets
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let horizontalStreets = eastWest.indexOf(this.endingLocation.horizontal);
    let horizontalAvenues = eastWest.indexOf(this.beginningLocation.horizontal);
    const blocksEastWest = Math.abs(horizontalStreets- horizontalAvenues);
    const blocksNorthSouth = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);

    return blocksEastWest + blocksNorthSouth;
  };

  estimatedTime(peak){
    // non peak hours 3 blocks/min; peak hours 2 blocks/min
    const speedPerMin = peak ? 2 : 3;
    return this.blocksTravelled() / speedPerMin;
  };
}
