import { data } from "../support/data.js";
import { pages } from "../support/pages.js";

export class SignInTest {
	async userInputsData() {
		await pages.magentoSignInPage.getEmailInputField().waitForEnabled()
		await pages.magentoSignInPage.getEmailInputField().click()
		await pages.magentoSignInPage.getEmailInputField().setValue(await data.magentoUser.user.email)

		await pages.magentoSignInPage.getPasswordInputField().waitForEnabled()
		await pages.magentoSignInPage.getPasswordInputField().click()
		await pages.magentoSignInPage.getPasswordInputField().setValue(await data.magentoUser.user.password)
	}

	async userSignsIn() {
		await pages.magentoSignInPage.getSignInSubmitBtn().click()
	}
}