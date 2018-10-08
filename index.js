
class Driver{
  constructor(name, startDateString){
    this.name = name;
    this.startDate = new Date(startDateString);
  }
  

  yearsExperienceFromBeginningOf(year){
    const newDate = new Date(year, 0, 1, 0, 0);
    let experience = newDate - this.startDate;
    // to seconds
    experience /= 1000;
    //to years (60sec/min *60min/hour *24hours/day *365days/year = 31536000sec/year)
    return Math.floor(experience /= 31536000);
  }

}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation= beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    const vertBlocks = this.endingLocation.vertical - this.beginningLocation.vertical;
    const horizBlocks = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);
    return vertBlocks + horizBlocks;
  }

  estimatedTime(rush = false)
  {
    if (rush === false) {return this.blocksTravelled()/3;} 
    else {return this.blocksTravelled()/2; } 
  }
}