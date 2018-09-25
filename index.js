class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let horizontalBlocks = eastWest.indexOf(this.endingLocation["horizontal"]) - eastWest.indexOf(this.beginningLocation["horizontal"]);
    let verticalBlocks = this.endingLocation["vertical"] - this.beginningLocation["vertical"];
    return horizontalBlocks + verticalBlocks;
  }

  estimatedTime(peakHour){
    let totalBlocks = this.blocksTravelled();
    let timePerBlock = false;

    if (peakHour === true){
      timePerBlock = 30;
    }
    else {
      timePerBlock = 20;
    }
    let totalTimeInMinutes = (totalBlocks * timePerBlock) / 60;
    return totalTimeInMinutes;
  }
}
