class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
    // console.log(this.startDate.getUTCFullYear());
    // console.log(this.startDate.getFullYear(););

  }
  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getUTCFullYear();
  }
}

class Route{
  constructor(startBlock, endBlock){
    this.startBlock = startBlock;
    this.endBlock = endBlock;
  }
  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
  }
}
