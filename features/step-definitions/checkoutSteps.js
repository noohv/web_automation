import { Then } from "@wdio/cucumber-framework";
import { tests } from "../support/tests.js";

Then ("User fills out shipping information", async function() {
	await tests.checkoutTest.openNewAddressForm(2)
	await tests.checkoutTest.assertAddressModalIsOpen(2)
	await tests.checkoutTest.fillOutAddressForm(2)
	await tests.checkoutTest.pressShipHereButton(2)
})

Then ("User selects best way shipping method", async function() {
	await tests.checkoutTest.selectShippingMethod(2)
})

Then ("User clicks on the Next button", async function() {
	await tests.checkoutTest.clickContinueButton(2)
})

Then ("User places order", async function() {
	await tests.checkoutTest.clickPlaceOrderButton(2)
})

Then ("Purchase is successful", async function() {
	await tests.checkoutTest.assertSuccessfulPurchase(2)
})
