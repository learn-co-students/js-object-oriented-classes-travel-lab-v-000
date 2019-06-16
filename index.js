class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  };
  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getFullYear();
  };
};

class Route {
  constructor(startLocation, endLocation){
    this.startLocation = startLocation;
    this.endLocation = endLocation;
  };
  blocksTravelled(){
    const northSouthStreetsManhattan = [
      "York",
      "1st Avenue",
      "2nd Avenue",
      "3rd Avenue",
      "Lexington",
      "Park",
      "Madison",
      "5th Avenue",
      "Central Park West",
      "Columbus",
      "Amsterdam",
      "Broadway",
      "West End",
      "Riverside Drive"
    ];
    // need to add together the horizontal and vertical
    const horizontalBlocks = Math.abs(northSouthStreetsManhattan.indexOf(this.startLocation.horizontal) - northSouthStreetsManhattan.indexOf(this.endLocation.horizontal));
    const verticalBlocks = Math.abs(this.startLocation.vertical - this.endLocation.vertical);

    return verticalBlocks + horizontalBlocks;
  };

  estimatedTime(peakHours = false) {
    const blocks = this.blocksTravelled();
    if (peakHours){
      return blocks / 2;
    } else {
      return blocks / 3;
    }
  };
};
