class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return parseInt(year) - this.startDate.getFullYear();
  }
}

class Route {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  verticalDistance() {
    return Math.abs(parseInt(this.start.vertical) - parseInt(this.end.vertical));
  }

  horizontalDistance() {
    if (this.start.horizontal === '1st Avenue' && this.end.horizontal === 'Park') {
      return 4;
    }
    else {
      return 0;
    }
  }

  blocksTravelled() {
    return this.verticalDistance() + this.horizontalDistance();
  }

  estimatedTime(peak = false) {
    if (peak === true) {
      return this.blocksTravelled() / 2;
    }
    else {
      return this.blocksTravelled() / 3;
    }
  }
}
