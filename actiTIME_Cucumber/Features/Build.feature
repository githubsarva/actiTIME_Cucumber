Feature:BuildNumber

Scenario: Verify the Build Number

Given User Launch Chrome Browser
When User Opens the URL "http://localhost/login.do"
And User Enters Username as "admin" and Password as "manager"
And Users click on login
Then Click on help icon
Then Click on about actiTime
And Verify the build number
Then Click on close
And Close the browser