

class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(endYear){
    let end = new Date(endYear, 0, 1);
    let total =  (end - this.startDate)/(31536000000);//returns in miliseconds

    return Math.round(total);
  };

};




const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];


class Route{


  constructor(beginningLocation, endingLocation){

    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;


  };

  aveToIndex(ave){
    return eastWest.indexOf(ave);
  };

  blocksTravelled(){
    const deltaX = this.aveToIndex(this.endingLocation.horizontal) - this.aveToIndex(this.beginningLocation.horizontal);

    const deltaY = this.endingLocation.vertical - this.beginningLocation.vertical;

    return deltaX + deltaY;
  };

  estimatedTime(peak){
    if (peak){
      return (1/2) * this.blocksTravelled()
    } else {
      return (1/3) * this.blocksTravelled()
    };
  };


};
