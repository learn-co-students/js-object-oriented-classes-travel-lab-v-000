class Driver {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }
    
    yearsExperienceFromBeginningOf(year) {
        const endYear = new Date(year, 1, 1);
        // console.log(`start = ${this.startDate.getFullYear()} || end = ${endYear.getFullYear()}`);
        return endYear.getFullYear() - this.startDate.getFullYear();
    }
    
}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }
    
    blocksTravelled() {
        // console.log('Vertical', this.endingLocation.vertical, this.beginningLocation.vertical, this.endingLocation.vertical - this.beginningLocation.vertical);
        // console.log('Horizontal', this.getBlockInt(this.endingLocation.horizontal), this.getBlockInt(this.beginningLocation.horizontal), this.getBlockInt(this.endingLocation.horizontal) - this.getBlockInt(this.beginningLocation.horizontal));
        let blocks;
        blocks = this.endingLocation.vertical - this.beginningLocation.vertical;
        blocks += this.getBlockInt(this.endingLocation.horizontal) - this.getBlockInt(this.beginningLocation.horizontal);
        return blocks;
    }
    
    estimatedTime(peak = false) {
        if (peak) {
            // Two blocks in 1 minute
            return this.blocksTravelled() / 2;
        } else {
            // Three blocks in 1 minute
            console.log();
            return this.blocksTravelled() / 3;
        }
    }

    getBlockInt(block) {
        const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
        return eastWest.indexOf(block) + 1;
    }

}
