import { faker, fakerEN_US } from "@faker-js/faker"

export default class MagentoUser {

	constructor() {
		this.user = new User(
			"Valters",
			"Huns",
			"valterstest@gmail.com",
			"j.wQP2WUhd9zAR@",
			faker.location.streetAddress(),
			fakerEN_US.location.city(),
			fakerEN_US.location.state(),
			fakerEN_US.location.zipCode(),
			"United States",
			fakerEN_US.phone.number()
		)
	}
}

class User {
	constructor(firstName, lastName, email, password, street, city, state, zip, country, phone) {
		this.firstName = firstName
		this.lastName = lastName
		this.email = email
		this.password = password
		this.street = street
		this.city = city
		this.state = state
		this.zip = zip
		this.country = country
		this.phone = phone
	}
}
