
class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate) 
  };

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear();
  }
};

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  };
  blocksTravelled(){
    const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    const vDis = Math.abs( parseInt(this.beginningLocation.vertical,10) - parseInt(this.endingLocation.vertical,10) );
    const hDis = Math.abs( eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal) );
return vDis + hDis;
  };

  estimatedTime(isPeakHours){
    return (isPeakHours ? this.blocksTravelled()/2 : this.blocksTravelled()/3);
  }
}