class Driver{
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
      // console.log('start date', this.startDate.getUTCFullYear());
  }

yearsExperienceFromBeginningOf(year) {
  let endDate = new Date(year, 1, 1);
  // format in stack overflow new Date(Year, Month, Day)

  // console.log('end date', endDate.getUTCFullYear());
  // console.log('total years', endDate.getUTCFullYear()- this.startDate.getUTCFullYear());

  let totalYears = (endDate.getUTCFullYear() - this.startDate.getUTCFullYear());
  return totalYears;
}

}
