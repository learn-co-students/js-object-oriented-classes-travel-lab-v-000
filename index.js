class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getFullYear()
  }

}


class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let horiDist = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)
    let vertDist = this.endingLocation.vertical - this.beginningLocation.vertical

    return Math.abs(horiDist) + Math.abs(vertDist);
  }

  estimatedTime(peak = false){
    console.log(peak)
    const distance = this.blocksTravelled()
    if (peak){
      return distance/2;
    } else {
      return distance/3;
    };
  };
}
