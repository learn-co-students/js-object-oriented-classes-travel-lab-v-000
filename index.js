class Driver{
  constructor(name, start){
    this.name = name
    let msec = Date.parse(start)
    this.startDate = new Date(msec)

  }
  yearsExperienceFromBeginningOf(end){
    return (end - (this.startDate.getFullYear()+1))
  }

}

class Route{
  constructor(beg,end){
    this.blocksTravelled = function(){
      if (beg.horizontal === end.horizontal){
        let total = Math.abs(beg.vertical - end.vertical)
        return total
      }
      else if (beg.vertical === end.vertical){
        return 4
      }
      else {
        let total = Math.abs(beg.vertical - end.vertical) + 4
        return total
      }

    }
    this.estimatedTime = function(peakHours){
      if (peakHours){
        return (this.blocksTravelled()/2)
      }
      else{
        return (this.blocksTravelled()/3)
      }
    }
  }

}
