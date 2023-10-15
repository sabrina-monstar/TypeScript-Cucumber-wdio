Feature: Demo

    @Demo
    Scenario Outline: I want to complete the full flow on the website

        Given Launch browser and navigate to url
        Then Verify that homepageis visible successfully
        When Add products to cart
        And Click Cart button
        Then Verify that cart page is displayed
        When Click Proceed To Checkout
        And  Click Register button
        And Fill all details in Sign up and create account
        Then Verify <accountText> and click Continue button
        # And  Verify <Logged in as username> at top
        # When Click Cart button
        # And Click Proceed To Checkout button
        # Then Verify Address Details and Review Your Order
        # When Enter description in comment text area and click Place Order
        # And Enter payment details: Name on Card, Card Number, CVC, Expiration date
        # And Click Pay and Confirm Order button
        # Then Verify the success message <Your order has been placed successfully!>

        Examples:
            | homepage   | accountText      | Header 3 |
            | Automation | ACCOUNT CREATED! | Value 3  |