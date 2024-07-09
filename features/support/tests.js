import { ChatTest } from "../test-objects/chatTest.js";
import { SignInTest } from "../test-objects/signInTest.js";
import { NavigationTest } from "../test-objects/navigationTest.js";
import { WishlistTest } from "../test-objects/wishlistTest.js";
import { ShoppingCartTest } from "../test-objects/shoppingCartTest.js";
import { CheckoutTest } from "../test-objects/checkoutTest.js";

class Tests {
	constructor() {
		this.chatTest = new ChatTest()
		this.signInTest = new SignInTest() 
		this.navigationTest = new NavigationTest()
		this.wishlistTest = new WishlistTest()
		this.shoppingCartTest = new ShoppingCartTest()
		this.checkoutTest = new CheckoutTest()
	}
}

export const tests = new Tests()
