Feature: search

  Scenario: search in site
    When a word/phrase is typed on search box
    Then get data from api and filter articles on list