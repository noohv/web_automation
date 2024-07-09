import UserChat from "./data/chatData.js";
import MagentoUser from "./data/magentoUserData.js";
import ProductItems from "./data/itemData.js";

class Data {
	constructor() {
		this.userChat = new UserChat()
		this.magentoUser = new MagentoUser()
		this.productItems = new ProductItems()
	}
}

export const data = new Data()
