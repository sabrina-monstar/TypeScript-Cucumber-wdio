Feature: Login Functionality


    Background: Login common url
        Given Launch the brower

    @Login
    Scenario Outline: Login with Valid username & Password
        When Click on Login button with valid credential

    @Invalid
    Scenario Outline: Login with invalid username & Password
        When Click on Login button and provide invalid credential


