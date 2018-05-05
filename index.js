class Driver {
  constructor(name, start) {
    this.name = name;
    this.startDate = new Date(start)
  }

  yearsExperienceFromBeginningOf(year) {
    let end = new Date(year, 1, 1)
    let years = (end - this.startDate)/(365*24*60*60*1000)
    return parseInt(years)
  }




}



