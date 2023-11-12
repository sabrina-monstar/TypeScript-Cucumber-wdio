@smoke @test
Feature: Test the attributes of a given element

    Background: test url
        Given I open the site
        
    @first
    Scenario Outline: valid username and password
        Then  I enter valid username and Password
    @second
    Scenario Outline: invalid username and password
        Then  I enter invalid username and password
    @third
    Scenario Outline: Select the sidebar and click on logout 
        When Click on the logout button
       
       