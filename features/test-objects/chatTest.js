import { data } from "../support/data.js";
import { pages } from "../support/pages.js";

export class ChatTest {
	async openChatPage() {
		await browser.url("https://demos.mqtt.cool/chat/")
	}

	async openNewChatTab() {
		await browser.newWindow("https://demos.mqtt.cool/chat/")
	}

	async assertSuccessfulConnection() {
		await pages.chatPage.getSuccessConnectionText().waitForDisplayed()
	}

	async switchTab(windowIndex) {
		const allTabs = await browser.getWindowHandles()
		await browser.switchToWindow(allTabs[windowIndex - 1]) 
	}

	async userEntersChat(userIndex) {
		await pages.chatPage.getNicknameInputField().waitForEnabled()
		await pages.chatPage.getNicknameInputField().click()
		
		if(userIndex === 1)
			await pages.chatPage.getNicknameInputField().setValue(await data.userChat.firstUser.firstName)
			
		if(userIndex === 2)
			await pages.chatPage.getNicknameInputField().setValue(await data.userChat.secondUser.firstName)

		await pages.chatPage.getConnectionButton().click()
	}

	async assertUserJoin(userIndex) {
		if(userIndex === 1)
			await pages.chatPage.assertJoinChat(await data.userChat.firstUser.firstName).waitForDisplayed()
			
		if(userIndex === 2)	
			await pages.chatPage.assertJoinChat(await data.userChat.secondUser.firstName).waitForDisplayed()
	}

	async assertUserList() {
		await pages.chatPage.assertUserName(await data.userChat.firstUser.firstName).waitForDisplayed()
		await pages.chatPage.assertUserName(await data.userChat.secondUser.firstName).waitForDisplayed()
	}

	async sendMessage(userIndex) {
		await pages.chatPage.getChatInputField().click()

		if(userIndex === 1) {
			await pages.chatPage.getChatInputField().setValue(await data.userChat.firstUser.lorem)
			await pages.chatPage.getSendMessageButton().click()
			await pages.chatPage.getUserOwnMessage(await data.userChat.firstUser.firstName, await data.userChat.firstUser.lorem).waitForDisplayed()
		}
		
		if(userIndex === 2) {
			await pages.chatPage.getChatInputField().setValue(await await data.userChat.secondUser.lorem)
			await pages.chatPage.getSendMessageButton().click()
			await pages.chatPage.getUserOwnMessage(await data.userChat.secondUser.firstName, await data.userChat.secondUser.lorem).waitForDisplayed()
		}
	}

	async assertMessageReceived(userIndex) {

		if(userIndex === 1)
			await pages.chatPage.getOtherUserMessage(await data.userChat.firstUser.firstName, await data.userChat.firstUser.lorem).waitForDisplayed()
			
		if(userIndex === 2)
			await pages.chatPage.getOtherUserMessage(await data.userChat.secondUser.firstName, await data.userChat.secondUser.lorem).waitForDisplayed()
		
	}

	async disconnectUser() {
			await pages.chatPage.getDisconnectButton().click()
	}

	async assertUserDisconnected(userIndex) {
		if(userIndex === 1)
			await pages.chatPage.getUserDisconnectedChat(await data.userChat.firstUser.firstName).waitForDisplayed()
		
		if(userIndex === 2)
			await pages.chatPage.getUserDisconnectedChat(await data.userChat.secondUser.firstName).waitForDisplayed()
	}

}
