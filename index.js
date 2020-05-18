class Driver {
  constructor(name,startDate) {
    this.name = name;
    this.startDate = startDate;
  }

  yearsExperienceFromBeginningOf(date){
    let startYear = new Date(this.startDate)
    return date - startYear.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    let vertical = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
    let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];
   let horizontalBeginning = eastWest.indexOf(this.beginningLocation.horizontal) + 1;
   let horizontalEnding = eastWest.indexOf(this.endingLocation.horizontal) + 1;
   let horizontal = Math.abs(horizontalBeginning - horizontalEnding);
    return vertical + horizontal ;
  }
  estimatedTime(peak){
    if (peak === true) {
      return this.blocksTravelled() / 2
    } else {
    return this.blocksTravelled() / 3
  }
  }
}
