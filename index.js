class Driver {

  constructor(name,day){
    this.name = name;
    this.day = day;
    this.startDate = new Date(day);
  }

  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getFullYear();
  }

}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Route {

  constructor(beginningLocation,endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  verticalBlocks(){
    return Math.abs(this.endingLocation.vertical-this.beginningLocation.vertical)
  }

  horizontalBlocks(){
    return Math.abs(eastWest.indexOf(this.beginningLocation.horizontal)-eastWest.indexOf(this.endingLocation.horizontal))
  }

  blocksTravelled(){
    return this.verticalBlocks()+this.horizontalBlocks();
  }

  estimatedTime(peak){
    if (peak === true) {
      return this.blocksTravelled()/2;
    }
    else {
      return this.blocksTravelled()/3;
    }
  }

}
