Feature: Register Page

    Background: Common URL
        Given open the browser and navigate to test url

    @Register
    Scenario Outline: As a user, I want to register the account
        Then Verify <NewText> is visible
        When Enter <UserName> and <Email>
        #When Enter the username and email
        Then Verify the <Header>
        When Select the Title
        And click on Password
        Then click on DOB
        And user will enter the following details

        Examples:
            | NewText          | UserName | Email                   | Header                    | gender | date |
            | New User Signup! | Rmma2025 | sabrinamdel+6@gmail.com | ENTER ACCOUNT INFORMATION | Mrs.   | 25   |


