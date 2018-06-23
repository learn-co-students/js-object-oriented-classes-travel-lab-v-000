let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  //startDate(){
    //let sd = new Date(this.startDate);
  //  debugger;
  //  return sd;
  //}

  yearsExperienceFromBeginningOf(endDate){
    return (endDate - this.startDate.getFullYear());
  }
}



class Route{

  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled(){

      let vertical = Math.abs(this.endingLocation["vertical"] - this.beginningLocation["vertical"]);

      let horizontal = Math.abs(eastWest.indexOf(this.endingLocation["horizontal"]) - eastWest.indexOf(this.beginningLocation["horizontal"]));

      return horizontal + vertical;
  }

  estimatedTime(bool){
    if (bool === true){
      return this.blocksTravelled() / 2;
    }
    else{
      return this.blocksTravelled() / 3;
    }
  }
}
