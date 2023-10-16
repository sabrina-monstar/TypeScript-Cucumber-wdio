Feature: Demo

    @Webdemo
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
        And  Verify Logged in as username at top
        When Click on cart button
        And Click on proceed to checkout button
        Then Verify Address Details and Review Your Order
        When Enter <description> in comment text area and click Place Order
        When Enter payment details: Name on Card and <cardnumber> and <cvc> and <expirationMonth> and <expirationYear>
        # And Click Pay and Confirm Order button
        # Then Verify the success message <Your order has been placed successfully!>

        Examples:
            | homepage   | accountText      | description               | cardnumber       | cvc| expirationMonth | expirationYear |
            | Automation | ACCOUNT CREATED! | I want to place the order | 3566000020000410 | 123 | 02              | 2026           |