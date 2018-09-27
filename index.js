class Driver{
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
      // console.log('start date', this.startDate.getUTCFullYear());
  }

yearsExperienceFromBeginningOf(year) {
  let endDate = new Date(year, 1, 1);
  // format in stack overflow new Date(Year, Month, Day)

  let totalYears = (endDate.getUTCFullYear() - this.startDate.getUTCFullYear());
  return totalYears;
}
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Route{
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
    // console.log('begin horiz', beginningLocation.horizontal);
    // console.log('end vert', endingLocation.vertical);
  }

// "Need to convert an avenue in the array to an index number."
avenueToNumber(avenue) {
  return eastWest.indexOf(avenue);
}


blocksTravelled(){
let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical;
// console.log('verticalDistance', this.endingLocation.vertical - this.beginningLocation.vertical);

let horizontalDistance = this.avenueToNumber(this.endingLocation.horizontal) - this.avenueToNumber(this.beginningLocation.horizontal);
// console.log('horizontalDistance',this.avenueToNumber(this.endingLocation.horizontal)- this.avenueToNumber(this.beginningLocation.horizontal));
// console.log('total', horizontalDistance + verticalDistance);
return horizontalDistance + verticalDistance;
}

estimatedTime(peak){
    return peak ? (this.blocksTravelled()/2) : (this.blocksTravelled()/3);
}
};
