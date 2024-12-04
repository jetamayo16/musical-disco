Feature: Check order information

  Scenario: Get order number by costumer name
    Given I am in the Order Managment APP
    When I enter the costumer name "ROJAS TAMAYO HELENA ADRIANA"
    And I click on the Detail button
    Then I should see the order number and the costumer information
    
