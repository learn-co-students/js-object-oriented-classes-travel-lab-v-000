class Driver{
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(endDate){
    const isNotExact = (this.startDate.getDate() + this.startDate.getMonth() > 0)
    return endDate - this.startDate.getFullYear() - isNotExact
  }
}

class Route{
  constructor(pickup, dropOff){
    this.pickup = pickup
    this.dropOff = dropOff
  }
  
  distance(a, b){
    if (a === b){ return 0 }
    return Math.abs((parseInt(a) || 0) - (parseInt(b) || 0))
  }

  verticalBlocksTravelled(){
    return this.distance(this.pickup.vertical, this.dropOff.vertical)
  }
  
  horizontalBlocksTravelled(){
    return this.distance(this.pickup.horizontal, this.dropOff.horizontal)
  }

  blocksTravelled(){
    return this.verticalBlocksTravelled() + this.horizontalBlocksTravelled()
  }

  estimatedTime(){
    return this.blocksTravelled() * 3
  }
}
