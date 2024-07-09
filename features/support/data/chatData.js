import { faker } from "@faker-js/faker"

export default class UserChat {

	constructor() {
		this.firstUser = new FirstUser(faker.person.firstName(), faker.lorem.sentence())
		this.secondUser = new SecondUser(faker.person.firstName(), faker.lorem.sentence())
	}
}

class FirstUser {
	constructor(firstName, lorem) {
		this.firstName = firstName
		this.lorem = lorem
	}
}

class SecondUser {
	constructor(firstName, lorem) {
		this.firstName = firstName
		this.lorem = lorem
	}
}
