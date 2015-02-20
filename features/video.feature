Feature: Videos

  Scenario: Video in article list
    When ever a post or @article contains a video
    Then display @thumbnail on post list

  Scenario: Video on article
    Given I am on an article
    Then show thumbnail by default with overlap play image
    When play image or thumbnail is clicked then replace video with thumbnail and play video

