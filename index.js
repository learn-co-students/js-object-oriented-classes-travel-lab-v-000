let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue',
                'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']


class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }
    yearsExperienceFromBeginningOf(endYear){
      return endYear - this.startDate.getFullYear()
    }
};

class Route {
  constructor(beginningLocation, endingLocation){
    debugger;
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  aveBlocks(){}

  blocksTravelled(){
    let verticalBlocks =
  }

};
