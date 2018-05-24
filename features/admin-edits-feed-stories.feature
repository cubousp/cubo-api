Feature: Admin edits feed stories
  As an Admin
  In order to fix any mistakes I might make when posting to feed
  I want to be able to edit the stories on feed

  Scenario: Successfully
    Given that the feed contains 1 story
      And a request authenticated as admin to edit the story
    When the api receives that request
    Then it should update the story with success