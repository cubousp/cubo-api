Feature: Admin posts to feed
  As an admin
  In order to keep participants up-to-date with what's going on at Cubo
  I want to post new stories to feed

  Scenario: Post to feed with success
    Given a request to post to feed authenticated with admin role and correct payload
    When the api receives the request to post to feed
    Then the api returns a success response with the created story


