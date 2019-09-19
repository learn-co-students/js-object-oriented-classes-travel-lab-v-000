class Driver {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    };

    yearsExperienceFromBeginningOf(year) {
        const yearObject = new Date(year, 1);
        return yearObject.getFullYear() - this.startDate.getFullYear();
    };

};

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    };

    blocksTravelled() {

        let eastWest = [
            '1st Avenue',
            '2nd Avenue',
            '3rd Avenue',
            'Lexington Avenue',
            'Park',
            'Madison Avenue',
            '5th Avenue'
          ];

       const verticalDistanceTravelled = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);

        const endAveIndex = eastWest.indexOf(this.endingLocation.horizontal);
        const begAveIndex = eastWest.indexOf(this.beginningLocation.horizontal);

        const horizontalDistanceTravelled = Math.abs(endAveIndex - begAveIndex);

        return verticalDistanceTravelled + horizontalDistanceTravelled;
    };

    estimatedTime(peakHour) {
        if(peakHour === true) {
            return (this.blocksTravelled())/2; 
        }
        else {
            return (this.blocksTravelled())/3; 
        };
    };
};



