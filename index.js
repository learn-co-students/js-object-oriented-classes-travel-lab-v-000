let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']


class Driver {
  constructor(name, startDate){
    this.startDate = new Date(startDate)
    this.name = name;
  }

  yearsExperienceFromBeginningOf(endDate){
    let nowDate = new Date()

    return endDate - this.startDate.getFullYear()-1

  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;

  }

  avenueIndex(item){
    return eastWest.indexOf(item);
  }

  blocksTravelled(){

    let horizontalDistance = this.avenueIndex(this.endingLocation.horizontal) -
    this.avenueIndex(this.beginningLocation.horizontal);

    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical;

    return horizontalDistance + verticalDistance;
  }

  estimatedTime(onPeak){
    if (onPeak){

      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }

  }


}



// A route is initialized with two arguments, a beginningLocation and an endingLocation.
// Both of these arguments are JavaScript objects with an attributes of horizontal and vertical.
//
// blocksTravelled — returns an integer with the number of blocks travelled.
// In New York City, to travel East and West you cross avenues, and to travel North and South you cross streets.
// To calculate the distance of in streets, you can use subtraction (eg. 13th street to 10th street is three blocks).
// To calculate the distance of avenues travelled, you will need to know the names and order of avenues in New York City.
// You can use the following array to help with your calculation:
// let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
//
// So to travel from 15th Street and 1st Avenue to 20th Street and
// Lexington Avenue is to travel eight blocks (five blocks North and three blocks West).
