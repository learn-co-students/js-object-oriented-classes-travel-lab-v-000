
class Driver{
  constructor(name, day){
    this.name = name;
    this.day = day;
    this.startDate = new Date(this.day);
  }


  yearsExperienceFromBeginningOf(year){
    return year - (this.startDate.getFullYear()+1)
  }

}
class Route{
  constructor(beginningLocation, endingLocation){
    this.begin = beginningLocation
    this.end = endingLocation
  }
  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let hordis = Math.abs(eastWest.indexOf(this.begin.horizontal)-eastWest.indexOf(this.end.horizontal))
    let vertdis = Math.abs(parseInt(this.end.vertical.split("th")[0])-parseInt(this.begin.vertical.split("th")[0]))
    return hordis+vertdis
  }

  estimatedTime(peak){
    if (peak === true) {
      return this.blocksTravelled()/2
    }else {
      return this.blocksTravelled()/3
    }
  }
}
