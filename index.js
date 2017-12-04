class Driver {
  constructor(name, date) {
    this.name = name;
    this.startDate = new Date(date)
}

yearsExperienceFromBeginningOf(year) {
  let startYear = this.startDate.getFullYear()

  return [year - startYear] -1;

}
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;

    }

    blocksTravelled() {
        let avenuesTravelled = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));

        let streetsTravelled = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);

        let totalBlocks = avenuesTravelled + streetsTravelled;

        return totalBlocks;

    }

    estimatedTime (peak) {
      if(peak){
      return this.blocksTravelled()/2;
    }
    else {
      return this.blocksTravelled()/3;
    }
}
}
