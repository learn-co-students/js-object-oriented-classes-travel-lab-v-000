let eastWest = [
'1st Avenue',
'2nd Avenue',
'3rd Avenue',
'Lexington Avenue',
'Park',
'Madison Avenue',
'5th Avenue'
];

class Driver {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }
    startDate() {
        return this.startDate;
    }
    yearsExperienceFromBeginningOf(year) {
        return new Date(year, 0, 1).getFullYear() - this.startDate.getFullYear();
    }
}

class Route {
    constructor(beginningLocation, endingLocation) {
      this.start = beginningLocation; 
      this.end = endingLocation;
    }

     blocksTravelled() {
      let horizontal = Math.abs(eastWest.indexOf(this.end.horizontal) - eastWest.indexOf(this.start.horizontal));
      let  vertical = Math.abs(this.end.vertical - this.start.vertical)
      return horizontal + vertical;
  }

    estimatedTime(peakTime) {
      return (peakTime ? this.blocksTravelled()/2 : this.blocksTravelled()/3);
    }
    
} 
