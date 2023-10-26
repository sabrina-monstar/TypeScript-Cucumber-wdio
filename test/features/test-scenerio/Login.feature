@login
Feature: Login Functionality


    Background: Login common url
        Given Launch the brower


    @invalid
    Scenario Outline: Login with invalid username & Password
        Given Launch the brower
        When Click on Login button and provide invalid credential

    @valid
    Scenario Outline: Login with Valid username & Password
        Given Launch the brower
        When Click on Login button with valid credential

    @test
    Scenario Outline: Signup with valid username & Email
        Given Launch the brower
        When Click on signup button and provide valid <username> and <email>

        Examples:
            | username         | email                    |
            | sabrina.rashid18 | sabrinamdel+20@gmail.com |




