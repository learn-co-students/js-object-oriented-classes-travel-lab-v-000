let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date( startDate );

  }
  yearsExperienceFromBeginningOf( year ) {
    let startYear = this.startDate.getFullYear()
    let yearsSinceStart = year - startYear
    return yearsSinceStart
  }
}



class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  avenueToInteger( avenue ) {
    return eastWest.indexOf( avenue );
  }

  blocksTravelled() {
    let horizontalDistance =
      this.avenueToInteger( this.endingLocation.horizontal) -
      this.avenueToInteger( this.beginningLocation.horizontal);
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical;
    return Math.abs( horizontalDistance ) + Math.abs( verticalDistance );
  }
  estimatedTime( peak ) {
    if (peak) {
      return this.blocksTravelled() / 2;

    }
    else {
      return this.blocksTravelled() / 3;
    }
  }
}

// During off peak hours, a driver travels three blocks in a minute, while during
// peak hours a driver travels an estimated two blocks in a minute.

//blocksTravelled — returns an integer with the number of blocks travelled.
//In New York City, to travel East and West you cross avenues, and to travel
//North and South you cross streets. To calculate the distance in streets, you
//can use subtraction (eg. 13th street to 10th street is three blocks).
//To calculate the distance in avenues travelled, you will need to know the
//names and order of avenues in New York City. You can use the following array
//to help with your calculation:





class BoardMember {
  constructor(name, homeState, training) {
    this.name = name;
    this.homeState = homeState
    this.training = training
  }
  veto() {
  return 'No, I must disagree';
  }
  approve(){
    return 'You can do that!';
  }

 doCharity(){
   return "I like to help people.";
  }

 releasePressStatement(){
   return "You will see great things from Scuber.";
 }

 sayHi() {
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
 };
}

class Ceo extends BoardMember {
  hireEmployee(){
    return `Welcome aboard!`
  }
}
