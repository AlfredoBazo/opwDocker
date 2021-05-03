Feature: Este archivo contiene escenarios de prueba de la web de openwebinars.

  @abrir
  Scenario: abrir la web de angular
    Given el usuario abre la web de angular
    Then la web abierta es la correcta


  @secciones
  Scenario Outline: abrir distintas secciones de angular
    Given el usuario abre la web de angular
    Then la web abierta es la correcta
    When abrimos la seccion <seccion>
    Then se abre la seccion <seccion>

    Examples:
      | seccion   |
      | features  |
      | resources |
      | events    |

  @buscador
  Scenario Outline: realizar varias búsquedas.
    Given el usuario abre la web de angular
    Then la web abierta es la correcta
    When buscamos la palabra <palabra>

    Examples:
      | palabra      |
      | angular      |
      | openwebinars |
