interface ILocation {
    horizontal: string;
    vertical: string;
}

class Route {
    public beginningLocation: ILocation;
    public endingLocation: ILocation;

    constructor(begin: ILocation, end: ILocation) {
        this.beginningLocation = begin;
        this.endingLocation = end;
    }
    public blocksTravelled(): number {
        return this.streetDistance() + this.blockDistance();
    }

    public estimatedTime(isPeak: boolean): number {
        if (isPeak) {
            return Math.ceil(this.blocksTravelled() / 2);
        } else {
            return Math.ceil(this.blocksTravelled() / 3);
        }
    }
    private streetDistance(): number {
        return Math.abs(
            Number(this.beginningLocation.vertical) -
                Number(this.endingLocation.vertical)
        );
    }

    private blockDistance(): number {
        const eastWest = [
            "1st Avenue",
            "2nd Avenue",
            "3rd Avenue",
            "Lexington Avenue",
            "Park",
            "Madison Avenue",
            "5th Avenue"
        ];

        return Math.abs(
            eastWest.indexOf(this.beginningLocation.horizontal) -
                eastWest.indexOf(this.endingLocation.horizontal)
        );
    }
}

class Driver {
    public name: string;
    public startDate: Date;

    constructor(name: string, startDate: string) {
        this.name = name;
        this.startDate = new Date(startDate);
    }

    public yearsExperienceFromBeginningOf(year: number): number {
        if (this.startDate.getMonth() === 0 && this.startDate.getDate() === 1) {
            return year - this.startDate.getFullYear();
        } else {
            return year - this.startDate.getFullYear() - 1;
        }
    }
}
