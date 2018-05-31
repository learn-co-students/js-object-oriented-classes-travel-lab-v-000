let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
class Driver{
constructor(name,startDate){
  this.name=name;
  this.startDate=new Date(startDate);
}
yearsExperienceFromBeginningOf(endDate){
  let endYear=new Date(endDate,1,1)
  return parseInt((endYear-this.startDate)/(365*24*60*60*1000))+1
}
}

class Route{
constructor(beginningLocation,  endingLocation){
  this.beginningLocation=beginningLocation;
  this.endingLocation=endingLocation;
}

blocksTravelled(){
 let horizontal=indexOf(this.endingLocation.horizontal)-indexOf(this.beginningLocation.horizontal);
 let vertical = indexOf(this.endingLocation.vertical)-indexOf(this.beginningLocation.vertical);
 return(horizontal+vertical)
}
estimatedTime(){

}
}
