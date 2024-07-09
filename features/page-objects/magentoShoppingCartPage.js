export class MagentoShoppingCartPage {

	getItemNames(index) {
		return browser[`browser${index}`].$$(`//*[@id="shopping-cart-table"]//*[@class="product-item-name"]`)
	}

	getProceedToCheckoutButton(index) {
		return browser[`browser${index}`].$(`//div[@class="cart-summary"]//button[@title="Proceed to Checkout"]`)
	}
}
