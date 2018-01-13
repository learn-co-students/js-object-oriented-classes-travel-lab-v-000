
class Driver{
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    const startYear = parseInt(this.startDate.toString().substring(11,15));

    return year - startYear

  }
}


class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation_horizontal = beginningLocation.horizontal
    this.beginningLocationVertical = beginningLocation.vertical
    this.endingLocation_horizontal = endingLocation.horizontal
    this.endingLocationVertical = endingLocation.vertical



  }


  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let verticalBlocks = this.endingLocationVertical - this.beginningLocationVertical
    let horizontalBlocks = eastWest.indexOf(this.beginningLocation_horizontal) - eastWest.indexOf(this.endingLocation_horizontal)
    return Math.abs(verticalBlocks) + Math.abs(horizontalBlocks)

  }

  estimatedTime(time){
    let travel_time = 0;
    if (time === true){
      travel_time = this.blocksTravelled()/2;
    } else {
      travel_time = this.blocksTravelled()/3;
    }
    return travel_time

  }

}
