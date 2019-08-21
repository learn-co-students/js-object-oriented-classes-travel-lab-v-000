
let eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'
  ];

class Driver{
    constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
 }

 yearsExperienceFromBeginningOf(endDate){
     return endDate - this.startDate.getFullYear()
 }
}


class Route{
    constructor(beginningLocation, endingLocation){
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }

indexAve(ave){
    return eastWest.indexOf(ave)
}

blocksTravelled(){
    let northSouthBlocks = this.endingLocation.vertical - this.beginningLocation.vertical 
    let eastWestBlocks = this.indexAve(this.endingLocation.horizontal) - this.indexAve(this.beginningLocation.horizontal)
    return northSouthBlocks + eastWestBlocks
}


estimatedTime(peak){

    if (peak) {
    return this.blocksTravelled() / 2
    }
    else {
    return this.blocksTravelled() / 3
    }
}
}


