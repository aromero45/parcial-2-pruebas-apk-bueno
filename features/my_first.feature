
Feature: Hacer pruebas en el apk del parcial bueno 

  Scenario: entrada 1 de fillup

    When I see "Fillup"
    Then I press "Fillup"
    And I enter text "12" into field with id "price"
    And I enter text "5" into field with id "volume"
    And I enter text "50" into field with id "odometer"
    Then I press "Save Fillup"

  Scenario: entrada 2 de fillup

    When I see "Fillup"
    Then I press "Fillup"
    And I enter text "150000" into field with id "price"
    And I enter text "14" into field with id "volume"
    And I enter text "470" into field with id "odometer"
    Then I press "Save Fillup"

  Scenario: entrada 3 de fillup

    When I see "Fillup"
    Then I press "Fillup"
    And I enter text "158000" into field with id "price"
    And I enter text "15" into field with id "volume"
    And I enter text "486" into field with id "odometer"
    Then I take a screenshot
    Then I press "Save Fillup"
    Then I wait for 2 seconds
    Then I take a screenshot
  
  Scenario: Ir a Historial y ver todo
    
    When I see "Fillup"
    Then I press "History"
    Then I wait for 2 seconds
    Then I take a screenshot
    Then I press view with id "text1"
    Then I wait for 2 seconds
    Then I take a screenshot

  Scenario: Editar entrada en Historial
    
    When I see "Fillup"
    Then I press "History"
    Then I press view with id "text1"
    Then I press "Edit"
    Then I wait for 2 seconds
    Then I take a screenshot
    Then I clear input field with id "price"
    Then I clear input field with id "volume"
    Then I clear input field with id "odometer"
    And I enter text "25000" into field with id "price"
    And I enter text "10" into field with id "volume"
    And I enter text "548" into field with id "odometer"
    Then I press "Save changes"
    Then I wait for 2 seconds
    Then I take a screenshot

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
    Then I wait for 2 seconds
    Then I take a screenshot
    Then I wait for 2 seconds
    And I enter text "carro alex" into field with id "title"
    And I enter text "2018" into field with id "year"
    And I enter text "Renault" into field with id "make"
    And I enter text "2018" into field with id "model"
    And I enter text "prueba 1 de new car" into field with id "description"
    Then I hide the keyboard
    And I scroll down
    And I scroll down
    And I press "Miles"
    And I press "Kilometers"
    And I press "Gallons"
    And I press "Gallons"
    And I scroll down
    Then I press "economy"
    And I press "Km / Gallon"
    Then I take a screenshot
    Then I wait for 2 seconds
    And I press "Add new vehicle"
    Then I wait for 2 seconds
    Then I take a screenshot

  

  