
Feature: Register Page

    Background: Common URL
        Given open the browser and navigate to test url

    @Register
    Scenario Outline: As a user, I want to register the account
        Then Verify <NewText> is visible
        When Enter UserName and Email
        Then Verify the <Header>
        When Select the Title
        And Click on Password
        Then Click on DOB <date> and <month> and <year>
        And User will select newsletter and special offer
        And User will enter the following details

        Examples:
            | NewText          | UserName | Email                    | Header                    | gender | date | month  | year |
            | New User Signup! | bmma2027 | sabrinamdel+36@gmail.com | ENTER ACCOUNT INFORMATION | Mrs.   | 25   | August | 1998 |

    @Newsletter
    Scenario Outline: Subscribe the news later
        When Click on the Newsletter and Subsctiption <email>

        Examples:
            | email                 | Header 2 | Header 3 |
            | sabrinamdel@gmail.com | Value 2  | Value 3  |



