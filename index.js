class Driver{
  constructor(name, myDate){
    this.name = name;
    this.date = myDate;
    this.startDate = new Date(this.date);
  }
  
  
  yearsExperienceFromBeginningOf(year){
    let myYear = (this.startDate).getFullYear();
    return (year - myYear);
  }
}

class Route{
  constructor(beg, end){
    this.beg = beg;
    this.end = end;
  }
  
  blocksTravelled(){
    let eastWest = ["1st Avenue", "2nd Avenue", "3rd Avenue", "Lexington Avenue", "Park", "Madison Avenue", "5th Avenue"];
   let myHor = Math.abs((eastWest.indexOf(this.beg.horizontal)) - (eastWest.indexOf(this.end.horizontal)));
   let myVert =  Math.abs(this.beg.vertical - this.end.vertical);
   return Math.abs(myHor + myVert);
    
  }
  estimatedTime(){
    if (arguments[0] === true){
      return this.blocksTravelled()/2;
    } else {
    return this.blocksTravelled()/3;
    }
  }
  
}

