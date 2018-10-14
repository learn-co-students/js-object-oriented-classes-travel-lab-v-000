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
     this.endLocation = end
   }
   blocksTravelled(){
     // const bh = Object.keys(beginning)[0]
     // const bv = Object.keys(beginning)[1]
     // const eh = Object.keys(beginning)[0]
     // const ev = Object.keys(beginning)[1]
     let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
     const vert = (this.endLocation['vertical'] - this.beginningLocation['vertical']).abs()
     const horizontal = (eastWest.indexOf(beginning['horizontal']) - eastWest.indexOf(end['horizontal'])).abs()
     return vert + horizontal
   }

   estimatedTime(){

   }
 }
