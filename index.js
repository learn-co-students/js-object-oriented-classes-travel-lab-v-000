class Driver {

  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(currentYear) {
    return currentYear - this.startDate.getFullYear()
  }
}
