class Driver{
  constructor(name, dayJoined) {
    this.name = name
    this.startDate = new Date(dayJoined)
  };

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  };
};

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  };
  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let streetsTravelled = this.endingLocation.vertical - this.beginningLocation.vertical;
    let avenuesTravelled = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)
    return streetsTravelled + avenuesTravelled;
  };

  estimatedTime(peak) {
    if(peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  };
};

driver = new Driver("Alfie", "Aug 9, 1995")
