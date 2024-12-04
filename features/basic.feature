Feature: Check order information

  Scenario: Get order number by customer name
    Given I am in the Order Managment APP
    When I enter the customer name "ROJAS TAMAYO HELENA ADRIANA"
    And I click on the Detail button
    Then I should see the order number and the customer information
    
