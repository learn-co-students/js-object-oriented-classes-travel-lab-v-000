class Driver{
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate) 
  }
  
 yearsExperienceFromBeginningOf(year){
   return new Date(year,0).getFullYear() - this.startDate.getFullYear() 
 }
}

function blockDif(s,e){
  return s>e ? s-e : e-s
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  
  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let shb= eastWest.indexOf(this.beginningLocation.horizontal)
    let ehb = eastWest.indexOf(this.endingLocation.horizontal)
    let hzValue = blockDif(shb,ehb)
    let verValue = blockDif(this.beginningLocation.vertical, this.endingLocation.vertical)
  
    return hzValue + verValue
    
  }
  
  estimatedTime(value){
    let blocks = this.blocksTravelled()
    if(value === true){
      return blocks/2
    }
    else{
      return blocks/3
    }
  }
  
}




















