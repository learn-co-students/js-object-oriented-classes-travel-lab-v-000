const avenues = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue',
  'Park', 'Madison Avenue', '5th Avenue']

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
  
  streetsTravelled(){
    return Math.abs(this.pickup.vertical - this.dropOff.vertical)
  }

  avenuesTravelled(){
    return Math.abs(
      avenues.indexOf(this.pickup.horizontal) - avenues.indexOf(this.dropOff.horizontal)
    )
  }

  blocksTravelled(){
    return this.avenuesTravelled() + this.streetsTravelled()
  }

  estimatedTime(isPeak){
    return this.blocksTravelled() / (isPeak ? 2 : 3)
  }
}
