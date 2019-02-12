class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate);
  }
  
  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date (year, 1, 1); 
    let endYear = endDate.getFullYear;
    let startYear = this.startDate.getFullYear;
    return endYear - startYear;
  }
}
