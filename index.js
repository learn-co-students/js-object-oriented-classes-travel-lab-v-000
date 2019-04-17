class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date (startDate + "Z");
  }
  
  yearsExperienceFromBeginningOf(year) {
    let startYear = this.startDate.getFullYear();
    return (year - startYear - 1);
  }
}
class Route {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  blocksTravelled() {
    const avenues = [
      "1st Avenue",
      "2nd Avenue",
      "3rd Avenue",
      "Lexington Avenue",
      "Park",
      "Madison Avenue",
      "5th Avenue"
    ];
    const vertical = Math.abs(this.end.vertical - this.start.vertical);
    const horizontal = Math.abs(
      avenues.indexOf(this.end.horizontal) -
        avenues.indexOf(this.start.horizontal)
    );
    return vertical + horizontal;
  }
  
  estimatedTime(peak = false) {
    if (peak === false) {
      return this.blocksTravelled() / 3;
    } else {
      return this.blocksTravelled() / 2;
    }
  }
}

