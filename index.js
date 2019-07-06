class Driver{
  constructor(name, joinStr){
    this.name=name;
    this.startDate=new Date(joinStr);
  }
  
 
  
  yearsExperienceFromBeginningOf(year){
    return year-this.startDate.getFullYear()-1;
  }
  
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Route{
  constructor(beginningLocation, endingLocation){
    
    this.begX=eastWest.indexOf(beginningLocation.horizontal);
    this.begY=beginningLocation.vertical;
    this.endX=eastWest.indexOf(endingLocation.horizontal);
    this.endY=endingLocation.vertical;
  }
  
  blocksTravelled(){
    return (this.endX-this.begX)+(this.endY-this.begY);
  }
  
  
  estimatedTime(is_peak){
    if(is_peak){
      return this.blocksTravelled()/2;
    } else {
      return this.blocksTravelled()/3;
    }
  }
  
  
}

