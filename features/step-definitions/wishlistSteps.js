import { Given, When, Then } from "@wdio/cucumber-framework";
import { tests } from "../support/tests.js";

Given ("User has no items in wishlist", async function() {
	await tests.navigationTest.openWishlistPage(1)
	await tests.wishlistTest.clearWishlist(1)
	await tests.wishlistTest.assertWishlistCleared(1)
})

When ("User adds item to wishlist", async function() {
	await tests.wishlistTest.addItemToWishlist(1, 1)
	await tests.wishlistTest.assertItemAddedToWishlist(1, 1)
})

When ("User adds another item to wishlist", async function() {
	await tests.navigationTest.openBagsPage(1)
	await tests.wishlistTest.addItemToWishlist(1, 2)
	await tests.wishlistTest.assertItemAddedToWishlist(1, 2)
})

When ("User views the first item", async function() {
	await tests.wishlistTest.viewWishlistItem(1, 1)
})

When ("Checks that it is the correct item", async function() {
	await tests.wishlistTest.assertCorrectItemPage(1, 1)
})

When ("User removes the second item", async function() {
	await tests.wishlistTest.deleteWishlistItem(1, 2)
})

Then ("User adds wishlist items to cart from second browser", async function() {
	await tests.navigationTest.openWishlistPage(2)
	await tests.wishlistTest.addWishlistItemsToCart(2)
})

Then ("Wishlist is empty after refresh in first browser", async function() {
	await tests.wishlistTest.refreshWishlist(1)
	await tests.wishlistTest.assertWishlistCleared(1)
})
