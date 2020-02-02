Feature: Login

Scenario: Valid login
Given User Launch Chrome Browser
When User Opens the URL "http://localhost/login.do"
And User Enters Username as "admin" and Password as "manager"
And Users click on login
Then Page url should be "http://localhost/user/submit_tt.do"
When User Click on logout link
Then Page url should be "http://localhost/login.do"
And Close the browser

Scenario Outline: Login Data Driven

Given User Launch Chrome Browser
When User Opens the URL "http://localhost/login.do"
And User Enters Username as "<email>" and Password as "<password>"
And Users click on login
Then Page url should be "http://localhost/user/submit_tt.do"
When User Click on logout link
Then Page url should be "http://localhost/login.do"
And Close the browser


Examples:

|email|password|
|admin|manager|
|admin|manager|