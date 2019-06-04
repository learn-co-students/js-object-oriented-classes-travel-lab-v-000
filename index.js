class Driver {
	constructor(name, startDate) {
		this.name = name;
		this.startDate = new Date()
	}

	yearsExperienceFromBeginningOf(endDate) {
		let endDate = new Date()
		return endDate - this.startDate.getFullYear(), 0, 1;
	}
}
