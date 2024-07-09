import { Given, When, Then } from "@wdio/cucumber-framework";
import { tests } from "../support/tests.js";

Given ("User navigates to login page", async function() {
	await tests.navigationTest.openLandingPage()
	await tests.navigationTest.clickSignInButton()
})

When ("User is in Bags products page", async function() {
	await tests.navigationTest.openBagsPage(1)
})

When ("User navigates back to wishlist page", async function() {
	await tests.navigationTest.openWishlistPage(1)
})

When ("User navigates to wishlist page", async function() {
	await tests.navigationTest.openWishlistPage(1)
})

Then ("User navigates to cart page in second browser", async function() {
	await tests.navigationTest.openShoppingCartPage(2)
})