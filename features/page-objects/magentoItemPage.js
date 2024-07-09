export class MagentoItemPage {
	getProductItemName(index, itemTitle) {
		return browser[`browser${index}`].$(`//span[@class='base' and text()="${itemTitle}"]`)
	}
}