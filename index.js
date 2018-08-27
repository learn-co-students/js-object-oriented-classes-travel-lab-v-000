class Driver{
  constructor(name, startDate){
  this.name = name
  this.startDate = startDate
  }


  startDate() {
   return new Date(this.startDate);
   }
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){

  }
}
