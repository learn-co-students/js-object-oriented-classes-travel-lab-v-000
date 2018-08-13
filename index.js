class Driver {
  constructor (name, startDate){
    this.name = name
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endYear){
    return endYear - this.startDate.getFullYear()  -1 ;
  }

}

class Route {
  constructor (beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  //let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
  blocksTravelled(){
    const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    const beginHorizontal = this.beginningLocation.horizontal;
    const endHorizontal = this.endingLocation.horizontal;

    let distVertical = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);

    let distHorizontal = Math.abs(eastWest.indexOf(beginHorizontal) - eastWest.indexOf(endHorizontal));


    return distVertical + distHorizontal;
  }

  estimatedTime(peakTime = false){
      //debugger;
      if (peakTime){
        //debugger;
        return this.blocksTravelled() / 2;
      } else {
        //debugger;
        return this.blocksTravelled() / 3;
      }
  }
}
