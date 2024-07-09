export class MagentoWishlistPage {
	getSuccessMessage(index, itemName) {
		return browser[`browser${index}`].$(`//div[contains(text(), "${itemName} has been added to your Wish List.")]`)
	}

	getProductItems(index) {
		return browser[`browser${index}`].$$(".products-grid .product-item-link")
	}

	getRemoveButtons(index) {
		return browser[`browser${index}`].$$(".products-grid .btn-remove")
	}

	getNoItemsText(index) {
		return browser[`browser${index}`].$(`//span[contains(text(), "You have no items in your wish list.")]`)
	}

	getItemAddToCartButtons(index) {
		return browser[`browser${index}`].$$(".products-grid .box-tocart")
	}

	getCartAddSuccessMessage(index, itemName) {
		return browser[`browser${index}`].$(`//div[contains(text(), "You added ${itemName} to your shopping cart.")]`)
	}

	getUpdateWishlistButton(index) {
		return browser[`browser${index}`].$(`//button[@title="Update Wish List"]`)
	}
}
