@product
Feature: Product Page
  
    Scenario Outline: I want to visit the Product page

        Given Launch the Product Page
        When Click on the product page link
        And Search the product <ele>
        And click on view Product

        Examples:
            | ele      | Header 2 | Header 3 |
            | Blue Top | Value 2  | Value 3  |
