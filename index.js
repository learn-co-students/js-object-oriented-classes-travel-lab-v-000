class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear();
  };
};

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    let blocks = 0;
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

    blocks += (eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));
    blocks += (this.endingLocation.vertical - this.beginningLocation.vertical);
    return blocks;
  };
  estimatedTime(peakTime){
    let blocks = this.blocksTravelled();
    if (peakTime === true){
      return blocks/2
    } else {
      return blocks/3
    }
  }
}
