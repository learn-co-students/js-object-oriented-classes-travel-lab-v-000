 class Driver {
   constructor(name, startdate){
     this.name = name
     this.startDate = new Date(startdate)
   }

   yearsExperienceFromBeginningOf(year){
     return year - this.startDate.getFullYear()

   }
 }

 class Route{
   constructor(beginning, end){
     this.beginningLocation = beginning
     this.endingLocation = end
   }
   blocksTravelled(){
     let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
     const vertDistance = (this.endingLocation['vertical'] - this.beginningLocation['vertical'])
     const horizontalDistance = (eastWest.indexOf(this.beginningLocation['horizontal']) - eastWest.indexOf(this.endingLocation['horizontal']))
     return Math.abs(vertDistance) + Math.abs(horizontalDistance)
   }

   estimatedTime(peak){
     const blocks = this.blocksTravelled()
     if (peak){
      return blocks/2
    } else{
      return blocks/3
    }
   }
 }
