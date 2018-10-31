
class Driver {
  
   constructor(name, startDate) {
     this.name = name;
     this.startDate = new Date(startDate);
   }
   


   yearsExperienceFromBeginningOf(year) {
    
     let answer=parseInt(year)-this.startDate.getFullYear();
      return answer;  
   }
}
   class Route {
     
     constructor(beginningLocation, endLocation){
       this.beginningLocation = beginningLocation;
       this.endLocation = endLocation;
       
     }
     
     blocksTravelled(){
       let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
      
     
       
      let avenues=eastWest.indexOf(this.endLocation.horizontal)
           - eastWest.indexOf(this.beginningLocation.horizontal);
   
          let block1=parseInt(this.endLocation.vertical)
          let block2=parseInt(this.beginningLocation.vertical);
  
          let total=avenues+(block1-block2);
  
          return total;
   }
   
     
       
       
         estimatedTime(isPeakHour) {
   
          if(isPeakHour === undefined) {
            return this.blocksTravelled()/3;
          } else {
            return this.blocksTravelled()/2;
          }
        }
     
   }