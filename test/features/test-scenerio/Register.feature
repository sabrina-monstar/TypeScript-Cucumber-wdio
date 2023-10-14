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
        Then click on DOB
        And enter adress info


        Examples:
            | NewText          | UserName    | Email                 | Header                    | gender | date |
            | New User Signup! | sabrina2023 | sabrinamdel@gmail.com | ENTER ACCOUNT INFORMATION | Mrs.   | 25    |


    @home
    Scenario Outline: I want to visit home and product page
        When Product page can be clickable
        And Verify that home page is visible successfully


