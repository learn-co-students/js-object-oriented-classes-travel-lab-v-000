
class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear() - 1
  }
}

class Route {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
   blocksTravelled() {
    const street_map = {
      "1st Avenue": 1,
      "Park": 5
    }
     let total = 0;
     total += (this.end.vertical - this.start.vertical);
    total += (street_map[this.end.horizontal] - street_map[this.start.horizontal]);
     return total;
  }
   estimatedTime(peak) {
    let divisor = peak ? 2 : 3;
    return this.blocksTravelled() / divisor;
  }
}
