import { data } from "../support/data.js";
import { pages } from "../support/pages.js";

export class ShoppingCartTest { 
	async assertShoppingCartItems(browserIndex) {
		for(let i = 0; i < await pages.magentoShoppingCartPage.getItemNames(browserIndex).length; i++) {
			await expect(await pages.magentoShoppingCartPage.getItemNames(browserIndex)[i]).toHaveText(data.productItems.items[i])
		}
	}

	async proceedToCheckout(browserIndex) { 
		await pages.magentoShoppingCartPage.getProceedToCheckoutButton(browserIndex).click()
	}
}