import { Then } from "@wdio/cucumber-framework";
import { tests } from "../support/tests.js";

Then ("User checks that correct items are in the cart", async function() {
	await tests.shoppingCartTest.assertShoppingCartItems(2)
})

Then ("User proceeds to checkout in second browser", async function() {
	await tests.shoppingCartTest.proceedToCheckout(2)
})