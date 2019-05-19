class Driver {
 constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
    yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear();
  }
}

let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled(){
      let horizontalStart = eastWest.indexOf(this.beginningLocation.horizontal);
    let verticalStart = this.beginningLocation.vertical;
    let horizontalEnd = eastWest.indexOf(this.endingLocation.horizontal);
    let verticalEnd = this.endingLocation.vertical;
 
    let verticalChange = Math.abs(verticalEnd-verticalStart);

    let horizontalChange = Math.abs(horizontalEnd-horizontalStart);


    return horizontalChange+verticalChange;
  }
  estimatedTime(time){
       if (time) {
      return this.blocksTravelled()/2;
    }
    else {
      return this.blocksTravelled()/3;
    }
  }
  
  }