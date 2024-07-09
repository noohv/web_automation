export class MagentoBagsPage {
	getProductItems(index) {
		return browser[`browser${index}`].$$(".product-item-link")
	}

	getWishlistButtons(index) {
		return browser[`browser${index}`].$$(".towishlist")
	}
}
