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
    let startHoriz;
    let endHoriz;

    if (this.end.horizontal === "Park"){
      endHoriz = 5;
    } else {
      endHoriz = parseInt(this.end.horizontal[0]);
    }

    if (this.start.horizontal === "Park"){
      startHoriz = 5;
    } else {
      startHoriz = parseInt(this.start.horizontal[0]);
    }

    let verticalBlocks = this.end.vertical - this.start.vertical;
    let horizontalBlocks = endHoriz - startHoriz;

    return verticalBlocks + horizontalBlocks;
  }

  estimatedTime(peak){
    let result;
    let blocks = this.blocksTravelled();

    if (peak === true){
      result = blocks / 2;
    } else {
      result = blocks / 3;
    }
    return result;
  }
}
