export class MagentoCheckoutPage {
	getNewAddressButton(index) {
		return browser[`browser${index}`].$(".action-show-popup")
	}

	getShippingAddressModalTitle(index) {
		return browser[`browser${index}`].$(`//h1[contains(text(), "Shipping Address")]`)
	}

	getFirstNameInput(index) {
		return browser[`browser${index}`].$(`//input[@name="firstname"]`)
	}

	getLastNameInput(index) {
		return browser[`browser${index}`].$(`//input[@name="lastname"]`)
	}
	
	getStreetAddressInput(index) {
		return browser[`browser${index}`].$(`//input[@name="street[0]"]`)
	}
	
	getCityInput(index) {
		return browser[`browser${index}`].$(`//input[@name="city"]`)
	}

	getStateInput(index) {
		return browser[`browser${index}`].$(`//*[@name="region_id"]`)
	}
	
	getZipCodeInput(index) {
		return browser[`browser${index}`].$(`//input[@name="postcode"]`)
	}
	
	getCountryInput(index) {
		return browser[`browser${index}`].$(`//*[@name="country_id"]`)
	}

	getPhoneInput(index) {
		return browser[`browser${index}`].$(`//input[@name="telephone"]`)
	}
	
	getSaveInAddressBookInput(index) {
		return browser[`browser${index}`].$(`//input[@id="shipping-save-in-address-book"]`)
	}

	getSubmitButton(index) {
		return browser[`browser${index}`].$(".action-save-address")		
	}

	getBestWayShippingInput(index) {
		return browser[`browser${index}`].$(`//input[@value="tablerate_bestway"]`)
	}

	getNextButton(index) {
		return browser[`browser${index}`].$(".continue")		
	}

	getCheckoutButton(index) {
		return browser[`browser${index}`].$(".checkout")		
	}

	getPurchaseSuccessText(index) {
		return browser[`browser${index}`].$(`//*[text()="Thank you for your purchase!"]`)		
	}

}