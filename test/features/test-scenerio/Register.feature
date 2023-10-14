Feature: Register Page

    Background: Common URL
        Given open the browser and navigate to test url

    @Register
    Scenario Outline: As a user, I want to register the account
        Then Verify <NewText> is visible
        When Enter <UserName> and <Email>
        Then Verify the <Header>
        When Select the Title
        And click on Password


        Examples:
            | ExpectedURL                           | NewText          | UserName    | Email                 | Header                    |
            | https://automationexercise.com/signup | New User Signup! | sabrina2023 | sabrinamdel@gmail.com | ENTER ACCOUNT INFORMATION |


    @home
    Scenario Outline: I want to visit home and product page
        When Product page can be clickable
        And Verify that home page is visible successfully


