  let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  
  yearsExperienceFromBeginningOf(year){
    let endDate = new Date(year, 1, 1)
    let totalExperience = (endDate - this.startDate)/(365*24*60*60*1000);
    return Math.ceil(totalExperience);
  }
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  findAvenueIndex(avenue){
    return eastWest.indexOf(avenue);
  }
  
  blocksTravelled(){
    let horizontalDistance = this.findAvenueIndex(this.beginningLocation.horizontal) - this.findAvenueIndex(this.endingLocation.horizontal);
    
    let verticalDistance = this.beginningLocation.vertical - this.endingLocation.vertical;
    
    return (Math.abs(horizontalDistance) + Math.abs(verticalDistance));
  }
  
  estimatedTime(peak){
    if(peak){
      return this.blocksTravelled()/2;
    } else{
      return this.blocksTravelled()/3;
    }
  }
}

