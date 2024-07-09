import { Given, When, Then } from "@wdio/cucumber-framework";
import { tests } from "../support/tests.js";

Given ("Both users have opened the page in new tabs and connected to the server", async function() {
	await tests.chatTest.openChatPage()
	await tests.chatTest.assertSuccessfulConnection()
	await tests.chatTest.openNewChatTab()
	await tests.chatTest.assertSuccessfulConnection()
})

When ("Both users enter the name", async function() {
	await tests.chatTest.userEntersChat(2)
	await tests.chatTest.switchTab(1)
	await tests.chatTest.userEntersChat(1)
})

When ("Both users connect to the broker", async function() {
	await tests.chatTest.assertUserJoin(1)
	await tests.chatTest.switchTab(2)
	await tests.chatTest.assertUserJoin(2)
})

When ("Both users are visible in the Connected List", async function() {
	await tests.chatTest.assertUserList()
	await tests.chatTest.switchTab(1)
	await tests.chatTest.assertUserList()

})

When ("Both users send messages", async function() {
	await tests.chatTest.sendMessage(1)
	await tests.chatTest.switchTab(2)
	await tests.chatTest.sendMessage(2)
})

Then ("Both users see that messages are recieved", async function() {
	await tests.chatTest.assertMessageReceived(1)
	await tests.chatTest.switchTab(1)
	await tests.chatTest.assertMessageReceived(2)
})

Then ("Both users disconnect and lose connection", async function() {
	await tests.chatTest.disconnectUser()
	await tests.chatTest.assertUserDisconnected(1)
	await tests.chatTest.switchTab(2)
	await tests.chatTest.disconnectUser()
	await tests.chatTest.assertUserDisconnected(2)
})
