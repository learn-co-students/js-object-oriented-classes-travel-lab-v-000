
class Driver {
    constructor (name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }

    yearsExperienceFromBeginningOf (endDate) {
         return  endDate - this.startDate.getFullYear() - 1;
    }
}

class Route {
    constructor (beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    };

    distanceTaveledEastWest () {
        let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];


    };

    distanceTaveledNorthSouth () {
        return this.beginningLocation.vertical - this.endingLocation.vertical;
    };


    blocksTravelled (){
        let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

         let blockStartNumber;
         let blockEndNumber;
         for (let i = 0; i < eastWest.length; i++){
             if (eastWest[i] === this.beginningLocation.horizontal){
                 blockStartNumber = i + 1;
             }
             if (eastWest[i] === this.endingLocation.horizontal){
                 blockEndNumber = i + 1;
             }
         }

         const distanceTaveledNorthSouth =  this.endingLocation.vertical - this.beginningLocation.vertical;
         const distanceTaveledEastWest = blockEndNumber -  blockStartNumber;
         const traveledTotal = distanceTaveledNorthSouth + distanceTaveledEastWest;

         return traveledTotal;
    };

    estimatedTime (cond){
        const at3BlocksPerMin = this.blocksTravelled() / 3;
        const at2BlocksPerMin = this.blocksTravelled() / 2;
        if (cond){
            return at2BlocksPerMin;
        }
        return at3BlocksPerMin;
    }



}
