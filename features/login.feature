Feature: Shopping at automationpractice.com
  Scenario Outline: As a return user, I Login and start to place an order in my shopping
    Given I am on the login page
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
      | email              | productname |password |
      | mytestE6@yaho.com  | Blouse      |Test@123 |
      | mytestE7@yaho.com  | Blouse      |Test@123 |

  Scenario Outline: As a return user, I Login and I start to search for shopping cart  product
    Given I am on the login page
    Then I click on Log In
    Then I enter email with <email> and password with <password>
    Then I start to order product name by search <productname>
    Then I click on Sign Out

  Examples:
      | email              | productname |password |
      | mytestE6@yaho.com  | Blouse      |Test@123 |

  Scenario Outline: As a return user, I Login and I start to search for shopping cart product and add to cart
    Given I am on the login page
    Then I click on Log In
    Then I enter email with <email> and password with <password>
    Then I start to order product name by search <productname>
    Then I add product to cart
    Then I click on Sign Out

  Examples:
      | email              | productname |password |
      | mytestE6@yaho.com  | Blouse      |Test@123 |

