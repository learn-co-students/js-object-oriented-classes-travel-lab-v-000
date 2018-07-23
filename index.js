
class Driver {
  constructor(name, day){
    this.name = name
    this.day = day
    this.startDate = new Date(day)
   }

   yearsExperienceFromBeginningOf(endDate){
     return endDate - this.startDate.getFullYear()
   }
  }

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    const beginningHorizontal = eastWest.indexOf(this.beginningLocation.horizontal);
    const beginningVertical = this.beginningLocation.vertical;
    const endingHorizontal = eastWest.indexOf(this.endingLocation.horizontal);
    const endingVertical = this.endingLocation.vertical;

    const distHorizontal = Math.abs(beginningHorizontal - endingHorizontal);
    const distVertical = Math.abs(beginningVertical - endingVertical);

    return distVertical + distHorizontal;
  }

  estimatedTime(peak = false) {
    if (peak) return this.blocksTravelled() / 2;
    return this.blocksTravelled() / 3;
  }
}
