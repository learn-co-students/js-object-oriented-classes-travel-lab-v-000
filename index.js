class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(year) {
    return new Date(year, 0, 0).getYear() - this.startDate.getYear();
  };
};


class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };

  blocksTravelled(){
    const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    const streets = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
    const avenues = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));
    return streets + avenues;
  };

  estimatedTime(peakHours){
    return peakHours ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3;
  }

}
