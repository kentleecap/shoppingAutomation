Feature: Shopping at automationpractice.com
  Scenario Outline: As new user, I registered with new email and continue for shopping all the way till payment.
    Given I am on the login page
    Then I click on signIn link
    Then I start to create email account with <email>
    Then I enter firstname with <firstname> and last name with <lastname>
    Then I enter address with <address> and city with <city> and poscode with <postcode>
    Then I click on Register button
    Then I check my firstname <firstname> and lastname <lastname> match
    Then I click on Sign Out
    Then I click on Log In
    Then I enter email with <email> and password with <password>
    Then I start to order product name by search <productname>
    Then I add product to cart
    Then I start to order selected product <productname>
    Then I start to confirm the address details
    Then I start to confirm the delivery details
    Then I select payment wire
    Then I select final confirmation
    Then I click on Sign Out
  Examples:
      | email               | firstname  | lastname   | address          | postcode | city   | mobile     | productname               |password |
      | random              | some       | ham        | 1 carbeen dr     | 67109    | kansas | 0432381123 | Blouse                    |Test@123 |
  
  Scenario Outline: As new user, I am going to register a new acount with my particulars.
    Given I am on the login page
    Then I click on signIn link
    Then I start to create email account with <email>
    Then I enter firstname with <firstname> and last name with <lastname>
    Then I enter address with <address> and city with <city> and poscode with <postcode>
    Then I click on Register button
    Then I check my firstname <firstname> and lastname <lastname> match
    Then I click on Sign Out
  Examples:
      | email               | firstname  | lastname   | address          | postcode | city   | mobile     | productname               |password |
      | random              | some       | ham        | 1 carbeen dr     | 67109    | kansas | 0432381123 | Blouse                    |Test@123 |
