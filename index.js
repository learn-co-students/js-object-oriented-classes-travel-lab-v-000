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
    console.log(this.beginningLocation.horizontal)
    debugger;
  }
}
