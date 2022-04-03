Feature: Google search

  Scenario: It should be correct google search
  Given I've got opened page "https://www.google.com"
  When I text "Hello world" to search input
  Then I should be redirected to "https://www.google.com/search"