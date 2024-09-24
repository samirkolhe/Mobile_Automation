Feature: Test App Validation

  Background: Clear and Relaunch App
    Given user clears app data and relaunches app

  Scenario Outline: Successful Login with <userType> Credentials
    Given user is on the product homepage
    When user clicks on the hamburger menu
    And user clicks on the Login button
    And user perform UI Validation on login page
    When user enters <userType> username
    And user enters <userType> password
    And user clicks on the Login button to login
    Then user should see the product homepage after successful login
    And user logs out of the application

    Examples:
      | userType |
      | STANDARD |

  Scenario Outline: Login Fails with <userType> Credentials
    Given user is on the product homepage
    When user clicks on the hamburger menu
    And user clicks on the Login button
    And user enters <userType> username
    Then user clicks on the Login button to login
    And user receive an error message "Password is required"

    Examples:
      | userType    |
      | NO_PASSWORD |

  Scenario Outline: Login Fails Due with <userType> Credentials
    Given user is on the product homepage
    When user clicks on the hamburger menu
    And user clicks on the Login button
    And user enters <userType> username
    And user enters <userType> password
    Then user clicks on the Login button to login
    And user receives an error message <message>

    Examples:
      | userType | message            |
      | LOCKED   | Locked user        |
      | NO_MATCH | Incorrect password |

  Scenario Outline: Login Fails with <userType> Credentials
    Given user is on the product homepage
    When user clicks on the hamburger menu
    And user clicks on the Login button
    Then user clicks on the Login button to login
    And user receive an error message "Username is required"

    Examples:
      | userType        |
      | NO_USER_DETAILS |
