import { data } from "../support/data.js";
import { pages } from "../support/pages.js";

export class NavigationTest {
	async openLandingPage() {
		await browser.url("https://magento.softwaretestingboard.com/")
	}

	async clickSignInButton() {
		await pages.magentoBasePage.getSignInBtn().click()
	}

	async assertLandingPage() {
		await expect(browser).toHaveUrl("https://magento.softwaretestingboard.com/")
	}

	async openBagsPage(index) {
		await browser[`browser${index}`].url("https://magento.softwaretestingboard.com/gear/bags.html")
	}

	async openWishlistPage(index) {
		await browser[`browser${index}`].url("https://magento.softwaretestingboard.com/wishlist/")
	}

	async openShoppingCartPage(index) {
		await browser[`browser${index}`].url("https://magento.softwaretestingboard.com/checkout/cart/")
	}

}
