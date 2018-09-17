class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear() - 1;
  }
}

class Route {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  blocksTravelled() {
    let result = 0;
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    result += Number(this.end.vertical) - Number(this.start.vertical);
    result += eastWest.indexOf(this.end.horizontal) - eastWest.indexOf(this.start.horizontal);
    return result;
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
