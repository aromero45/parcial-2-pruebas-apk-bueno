
Feature: Hacer pruebas en el apk del parcial bueno 

  Scenario: entrada 1 de fillup

    When I see "Fillup"
    Then I press "Fillup"
    And I enter text "12" into field with id "price"
    And I enter text "5" into field with id "volume"
    And I enter text "50" into field with id "odometer"
    Then I take a screenshot
    Then I press "Save Fillup"
    Then I take a screenshot
  
  Scenario: Ir a Historial y ver todo
    
    When I see "Fillup"
    Then I press "History"
    Then I take a screenshot
    Then I press view with id "text1"
    Then I wait for 2 seconds
    Then I take a screenshot
    Then I wait for 2 seconds

  Scenario: Ir a Estadisticas del fillup 
     
    When I see "Fillup"
    Then I press "Statistics"
    Then I take a screenshot
    And I scroll down  
    Then I take a screenshot
    Then I wait for 2 seconds

  Scenario: Ver vehiculos y agregar uno nuevo 

    When I see "Fillup"
    Then I press "Vehicles"
    Then I take a screenshot
    Then I wait for 2 seconds
    Then I press the menu key
    Then I press "Add new vehicle"
    Then I take a screenshot
    Then I wait for 2 seconds
    And I enter text "carro alex" into field with id "title"
    And I enter text "2018" into field with id "year"
    And I enter text "renauld" into field with id "make"
    And I enter text "2018" into field with id "model"
    And I enter text "prueba 1 de new car" into field with id "description"
    And I scroll down
    And I scroll down
    And I press "Miles"
    And I press "Kilometers"
    And I press "Gallons"
    And I press "Litres"
    And I press "Miles / Gallon"
    And I press "Miles / Litre"
    Then I take a screenshot
    Then I wait for 2 seconds
    And I press "Add new vehicle"
    Then I wait for 2 seconds
    Then I take a screenshot

  

  