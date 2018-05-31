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
 let horizontal=eastWest.indexOf(this.endingLocation.horizontal)-eastWest.indexOf(this.beginningLocation.horizontal);
 let vertical = this.endingLocation.vertical-this.beginningLocation.vertical;
 return Math.abs(horizontal)+Math.abs(vertical)
}

estimatedTime(peak){
  if (peak){
    return this.blocksTravelled()/2
  } else{ return this.blocksTravelled()/3}
}
}
