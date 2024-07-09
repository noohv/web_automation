Feature: User chat test

	@chat
	Scenario: Chat with 2 users in different tabs
		Given Both users have opened the page in new tabs and connected to the server
		When Both users enter the name
		And Both users connect to the broker
		And Both users are visible in the Connected List
		And Both users send messages
		Then Both users see that messages are recieved
		And Both users disconnect and lose connection
