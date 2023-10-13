Feature: Fill up the form
    
    Scenario Outline: As a user, I want to fill up the form

        Given open the browser and navigate to url
        When Click on Signup button
        And Enter <UserName> and <Email>
        And click on submit button
        And Select the Title

        Examples:
            | UserName        | Email                 |
            | sabrinamdel2022 | sabrinamdel@gmail.com |