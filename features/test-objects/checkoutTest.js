import { data } from "../support/data.js";
import { pages } from "../support/pages.js";

export class CheckoutTest { 
	async openNewAddressForm(browserIndex) {
		await pages.magentoCheckoutPage.getNewAddressButton(browserIndex).click()
	}

	async assertAddressModalIsOpen(browserIndex) {
		await pages.magentoCheckoutPage.getShippingAddressModalTitle(browserIndex).waitForDisplayed()
	}

	async fillOutAddressForm(browserIndex) {
		await pages.magentoCheckoutPage.getFirstNameInput(browserIndex).waitForClickable()
		await pages.magentoCheckoutPage.getFirstNameInput(browserIndex).setValue(data.magentoUser.user.firstName)

		await pages.magentoCheckoutPage.getLastNameInput(browserIndex).setValue(data.magentoUser.user.lastName)
		
		await pages.magentoCheckoutPage.getCityInput(browserIndex).setValue(data.magentoUser.user.city)
		
		await pages.magentoCheckoutPage.getStreetAddressInput(browserIndex).setValue(data.magentoUser.user.street)
		
		await pages.magentoCheckoutPage.getCountryInput(browserIndex).scrollIntoView({block:'center'})
		await pages.magentoCheckoutPage.getCountryInput(browserIndex).click()
		await pages.magentoCheckoutPage.getCountryInput(browserIndex).selectByVisibleText(data.magentoUser.user.country)
		
		await pages.magentoCheckoutPage.getStateInput(browserIndex).click()
		await pages.magentoCheckoutPage.getStateInput(browserIndex).selectByVisibleText(data.magentoUser.user.state)
		
		await pages.magentoCheckoutPage.getZipCodeInput(browserIndex).setValue(data.magentoUser.user.zip)
		await pages.magentoCheckoutPage.getPhoneInput(browserIndex).setValue(data.magentoUser.user.phone)
	
		await pages.magentoCheckoutPage.getSaveInAddressBookInput(browserIndex).click()
	}

	async pressShipHereButton(browserIndex) {
		await pages.magentoCheckoutPage.getSubmitButton(browserIndex).click()
	}

	async selectShippingMethod(browserIndex) {
		await pages.magentoCheckoutPage.getBestWayShippingInput(browserIndex).waitForClickable()
		await pages.magentoCheckoutPage.getBestWayShippingInput(browserIndex).click()
	}

	async clickContinueButton(browserIndex) {
		await pages.magentoCheckoutPage.getNextButton(browserIndex).waitForClickable()
		await pages.magentoCheckoutPage.getNextButton(browserIndex).click()
	}

	async clickPlaceOrderButton(browserIndex) {
		await pages.magentoCheckoutPage.getCheckoutButton(browserIndex).waitForClickable()
		await pages.magentoCheckoutPage.getCheckoutButton(browserIndex).click()
	}

	async assertSuccessfulPurchase(browserIndex) {
		await pages.magentoCheckoutPage.getPurchaseSuccessText(browserIndex).waitForDisplayed()
	}
}