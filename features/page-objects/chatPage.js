export class ChatPage {
	getSuccessConnectionText() {
		return $('.text-success')
	}

	getNicknameInputField() {
		return $("#user")
	}

	getConnectionButton() {
		return $("#connectBtn")
	}

	assertJoinChat(userName) {
		return $(`//div[text()="${userName} has joined the chat"]`)
	}

	assertUserName(userName) {
		return $(`//*[@id='usersList']//*[contains(text(), "${userName}")]`)
	}

	getChatInputField() {
		return $('#sendMessage')
	}

	getSendMessageButton() {
		return $('#replyBtn')
	}

	getUserOwnMessage(userName, userMessage) {
		return $(`//div[@class='loggedUser' and text()="${userName}: ${userMessage}"]`)
	}

	getOtherUserMessage(userName, userMessage) {
		return $(`//div[@class='text-primary' and text()="${userName}: ${userMessage}"]`)
	}

	getDisconnectButton() {
		return $("#disconnectBtn")
	}

	getUserDisconnectedChat(userName) {
		return $(`//div[text()="${userName}: has disconnected"]`)
	}
}
