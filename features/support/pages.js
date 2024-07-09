import { ChatPage } from "../page-objects/chatPage.js";
import { MagentoBasePage } from "../page-objects/magentoBasePage.js";
import { MagentoSignInPage } from "../page-objects/magentoSignInPage.js";
import { MagentoWishlistPage } from "../page-objects/magentoWishlistPage.js";
import { MagentoBagsPage } from "../page-objects/magentoBagsPage.js";
import { MagentoItemPage } from "../page-objects/magentoItemPage.js";
import { MagentoShoppingCartPage } from "../page-objects/magentoShoppingCartPage.js";
import { MagentoCheckoutPage } from "../page-objects/magentoCheckoutPage.js";

class Pages {
	constructor() {
		this.chatPage = new ChatPage()
		this.magentoBasePage = new MagentoBasePage()
		this.magentoSignInPage = new MagentoSignInPage()
		this.magentoWishlistPage = new MagentoWishlistPage()
		this.magentoBagsPage = new MagentoBagsPage()
		this.magentoItemPage = new MagentoItemPage()
		this.magentoShoppingCartPage = new MagentoShoppingCartPage()
		this.magentoCheckoutPage = new MagentoCheckoutPage()
	}
}

export const pages = new Pages()
