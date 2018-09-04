class Driver {
  
  constructor(name, day) {
    this.name = name 
    this.startDate = new Date(day)
  }
  
  yearsExperienceFromBeginningOf(year) {
    return year - (this.startDate.getFullYear()) - 1
  }
  
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation 
    this.endingLocation = endingLocation
  }
  
  
  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
  
    
    let hStart = Number.parseInt(this.beginningLocation['vertical'], 10) 
    let hEnd = Number.parseInt(this.endingLocation['vertical'], 10)
    
    let h;
    if (hStart < hEnd) {
       h = hEnd - hStart
    } else {
      h =  hStart - hEnd
    }
    
    let vStart = eastWest.indexOf(this.beginningLocation['horizontal'])
    
    let vEnd = eastWest.indexOf(this.endingLocation['horizontal'])
    
    let v;
    if (vStart < vEnd) {
     v = vEnd - vStart
    } else {
     v =  vStart - vEnd
    }
    
    return v + h
  }
  
  estimatedTime(peak) {
    if (peak) {
    return this.blocksTravelled()/2
    } else {
    return this.blocksTravelled()/3
    }
  }
  
}