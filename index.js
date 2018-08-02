// driver function
// has two parameters name, startDate
// method startDate
// return JavaScript Date object
// method yearsExperienceFromBeginningOf
// has one parameter endDate
// method calculates the number of years driven
// Should I make the endDate a date object? - no it's already declared
// How do I make it equal 21 months?
// I need to grab the year from the startDate object - getFullYear()
// endDate - this.startDate.getFullYear() give me 22, I need to get 21
// How do I get the value to return as 21
// I need to grab the date for the beginning of the year for endDate - setYear()?
class Driver {
  constructor(name, startDate) {
  this.name = name
  this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear() - 1
  }
}

// Route function
// two arguments: beginningLocation, endingLocation
// Both argument are JavaScript objects with keys of horizontal and vertical
// blocksTravelled()
// no arguements
// calculates the number of blocksTravelled
// let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
// Do I need to iterate through the eastWest array to figure out how many horizontal blocks I've travelled?
// Could I slice or split to get the length of one location of the array to the next?
// Maybe I should filter
// the indexOf method grabs the index of the value
class Route {
  constructor(beginningLocation, endingLocation){
  this.beginningLocation = beginningLocation;
  this.endingLocation = endingLocation;
}
  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let horizontalTotal = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);
    let verticalTotal = this.endingLocation.vertical - this.beginningLocation.vertical;
    return horizontalTotal + verticalTotal;
  }
  // Return the and integer for the amount of time the ride will take
  // The time comes from the route
  // If it's peak or off peak
  // off peak 3 blocks per minutes
  // peak 2 blocks per minute
  // how do you know if it's peak?
  estimatedTime(variable){
    if (variable) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
