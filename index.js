class Driver {
  constructor (name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
yearsExperienceFromBeginningOf(endDate) {
  
  //this converts endDate to a string and then creates the date object and pulls only the year out
    //it then subtracts the startDate year attribute from it
    return new Date(`${endDate}`).getFullYear() - this.startDate.getFullYear()
  }
}
