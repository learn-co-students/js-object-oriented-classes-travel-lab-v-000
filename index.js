class Driver {
  constructor(name, string_date){
    this.name = name;
    this.string_date = string_date;
    this.startDate = this.startDate();
  }

  startDate() {
    let start_date = new Date(this.string_date);
    return start_date;
  }

  yearsExperienceFromBeginningOf(year) {
      return (parseInt(year) - this.startDate.getFullYear());
  }

}

 class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let total = 0;
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
      ];

    total += Math.abs(this.beginningLocation['vertical'] - this.endingLocation['vertical']);
    total += Math.abs((eastWest.indexOf(this.beginningLocation['horizontal']) + 1) - (eastWest.indexOf(this.endingLocation['horizontal']) + 1));

    return total;
  }

  estimatedTime(peak = false){
    if (peak === true) {
      return Math.round(this.blocksTravelled() / 2)
    }
    else {
      return Math.round(this.blocksTravelled() / 3)
    }
  }

}
