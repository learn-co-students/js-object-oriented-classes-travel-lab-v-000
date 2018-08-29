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
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    // console.log(eastWest);
    // console.log(this.startBlock.horizontal);
    var horizontalBlocks = Math.abs(eastWest.findIndex(x => this.startBlock.horizontal) - eastWest.findIndex(x => this.endBlock.horizontal));
    var verticalBlocks =  Math.abs(this.startBlock.vertical - this.endBlock.vertical);
    // console.log(eastWest.findIndex(x => this.startBlock.horizontal));
    console.log(horizontalBlocks);
    console.log(verticalBlocks);
    return horizontalBlocks + verticalBlocks;
  }
}
