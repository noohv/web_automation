Feature: Magento store wishlist, shopping cart and checkout test

	Background:
		Given User navigates to login page
		And User logs in
		And User has no items in wishlist

	@magento
	Scenario: User purchases items that are added to wishlist
		When User is in Bags products page
		And User adds item to wishlist
		And User adds another item to wishlist
		And User views the first item
		And Checks that it is the correct item
		And User navigates back to wishlist page
		And User removes the second item
		And User navigates to wishlist page
		Then User adds wishlist items to cart from second browser
		And User navigates to cart page in second browser
		And User checks that correct items are in the cart
		And User proceeds to checkout in second browser
		And User fills out shipping information
		And User selects best way shipping method
		And User clicks on the Next button
		And User places order
		And Purchase is successful
		And Wishlist is empty after refresh in first browser
