

  function beginningLocation(horizontal,vertical){
  };

  function endingLocation(horizontal,vertical){
  };

  let eastWest = ['1st Avenue','2nd Avenue','3rd Avenue','Lexington Avenue','Park','Madison Avenue','5th Avenue'];

class Driver {

  constructor (name, dateString){
    this.name = name;
    this.startDate = new Date(dateString);

  };

  yearsExperienceFromBeginningOf(endDate){

    return endDate - this.startDate.getFullYear();
  };
}

class Route {

    constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }



    blocksTravelled(){

    let verticalDifference = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    let horizontalDifference = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
    let distanceTraveled = horizontalDifference + verticalDifference;
    return distanceTraveled
  };

    estimatedTime(peakHours){

      if (peakHours){

        return Math.abs(this.blocksTravelled() / 2);

      } else {

        return Math.abs(this.blocksTravelled() / 3);
      }
    };

}










