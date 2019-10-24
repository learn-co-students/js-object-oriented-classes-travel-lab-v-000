class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate =  new Date(startDate);
    this.startDate
  }

  yearsExperienceFromBeginningOf(date){
    return date - this.startDate.getFullYear() - 1;
  }
}

class Route{
  constructor(begin, end){
    this.beginningLocation = begin;
    this.endingLocation = end;
  }

  eastWest(){ return ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']}

  blocksTravelled(){
    let distance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    distance += Math.abs(this.eastWest().indexOf(this.beginningLocation.horizontal) - this.eastWest().indexOf(this.endingLocation.horizontal))
    return distance
  }

  estimatedTime(peak){
    return peak ? this.blocksTravelled()/2 : this.blocksTravelled()/3;
  }

}
