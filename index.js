class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate){
    let start = this.startDate.getFullYear();
    return endDate - start;
  }
}

class Route{
  constructor(start, end){
    this.start = start;
    this.end = end;
  }

  blocksTravelled() {
    return this.end.vertical - this.start.vertical
  }
}
