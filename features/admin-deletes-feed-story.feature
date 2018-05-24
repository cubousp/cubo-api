Feature: Admin deletes feed story
  As an Admin
  In order to fix any mistakes I might make when posting to feed
  I want to be able to delete stories on feed

  Scenario: Successfully
    Given that the feed contains 1 story to be deleted
    And a request authenticated as admin to delete the story
    When the api receives the delete story request
    Then it should delete the story with success