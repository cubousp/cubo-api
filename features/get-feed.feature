Feature: Get Feed
  As an user of the CUBO system
  In order to see what's going on with the event
  I want to be able to get the latest stories from the feed

  Scenario: Read feed with success
    Given there are three stories on the feed
      And a request to get the feed
    When the api receives the request to get the feed
    Then the api returns the latest stories with success