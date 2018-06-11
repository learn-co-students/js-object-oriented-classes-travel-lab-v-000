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

}
