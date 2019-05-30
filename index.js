
 class Driver {
   constructor(name, startDate){
     this.name = name;
     this.startDate = new Date(startDate);
   }
   yearsExperienceFromBeginningOf(year) {
     return year - this.startDate.getFullYear();
   };
 }
 class Route {
   constructor(beginningLocation, endingLocation){
     this.beginningLocation_horizontal = beginningLocation.horizontal;
     this.beginningLocation_vertical = beginningLocation.vertical;
     this.endingLocation_horizontal = endingLocation.horizontal;
     this.endingLocation_vertical= endingLocation.vertical;
   }
   blocksTravelled(){
     let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
     if (this.beginningLocation_horizontal === this.endingLocation_horizontal) {
       return Math.abs(this.beginningLocation_vertical - this.endingLocation_vertical);
     } else {
       let horizontalBlocksFirst = eastWest.indexOf(this.beginningLocation_horizontal) + 1;
       let horizontalBlocksLast = eastWest.indexOf(this.endingLocation_horizontal) + 1;
       return Math.abs(this.beginningLocation_vertical - this.endingLocation_vertical) + Math.abs(horizontalBlocksFirst - horizontalBlocksLast);
     }
   };
   estimatedTime(value = false){
     if (value === true) {
       return this.blocksTravelled() / 2;
     } else {
       return this.blocksTravelled() / 3;
     }
   }
 }
