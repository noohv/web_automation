import { data } from "../support/data.js";
import { pages } from "../support/pages.js";

export class WishlistTest {
	async addItemToWishlist(browserIndex, itemIndex) {
		await pages.magentoBagsPage.getProductItems(browserIndex)[itemIndex - 1].scrollIntoView({block:'center'})
		await pages.magentoBagsPage.getProductItems(browserIndex)[itemIndex - 1].moveTo()
		await pages.magentoBagsPage.getWishlistButtons(browserIndex)[itemIndex - 1].click()
		data.productItems.items.push(await pages.magentoBagsPage.getProductItems(browserIndex)[itemIndex - 1].getText())
	}

	async assertItemAddedToWishlist(browserIndex, itemIndex) {
		await pages.magentoWishlistPage.getSuccessMessage(browserIndex, data.productItems.items[itemIndex - 1]).waitForDisplayed()
	}

	async viewWishlistItem(browserIndex, itemIndex) {
		await pages.magentoWishlistPage.getProductItems(browserIndex)[itemIndex - 1].waitForDisplayed()
		await pages.magentoWishlistPage.getProductItems(browserIndex)[itemIndex - 1].click()
	}

	async assertCorrectItemPage(browserIndex, itemIndex) {
		await pages.magentoItemPage.getProductItemName(browserIndex, data.productItems.items[itemIndex - 1]).waitForDisplayed()
	}

	async deleteWishlistItem(browserIndex, itemIndex) {
		await pages.magentoWishlistPage.getProductItems(browserIndex)[itemIndex - 1].scrollIntoView({block:'center'})
		await pages.magentoWishlistPage.getProductItems(browserIndex)[itemIndex - 1].moveTo()
		await pages.magentoWishlistPage.getRemoveButtons(browserIndex)[itemIndex - 1].click()
		data.productItems.items.splice(itemIndex - 1, 1)
	}

	async clearWishlist(browserIndex) {
		for(let i = await pages.magentoWishlistPage.getProductItems(browserIndex).length; i > 0; i--) {
			await this.deleteWishlistItem(browserIndex, i)
		}
	}

	async assertWishlistCleared(browserIndex) {
		await pages.magentoWishlistPage.getNoItemsText(browserIndex).waitForDisplayed()
	}

	async addWishlistItemsToCart(browserIndex) {
		for(let i = await pages.magentoWishlistPage.getProductItems(browserIndex).length; i > 0; i--) {
			await pages.magentoWishlistPage.getProductItems(browserIndex)[i - 1].scrollIntoView({block:'center'})
			await pages.magentoWishlistPage.getProductItems(browserIndex)[i - 1].moveTo()
			await pages.magentoWishlistPage.getItemAddToCartButtons(browserIndex)[i - 1].click()
			await pages.magentoWishlistPage.getCartAddSuccessMessage(browserIndex, data.productItems.items[i - 1]).waitForDisplayed()
		}
	}

	async refreshWishlist(browserIndex) {
		await pages.magentoWishlistPage.getUpdateWishlistButton(browserIndex).waitForClickable()
		await pages.magentoWishlistPage.getUpdateWishlistButton(browserIndex).click()
	}
}