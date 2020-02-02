$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Build.feature");
formatter.feature({
  "line": 1,
  "name": "BuildNumber",
  "description": "",
  "id": "buildnumber",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify the Build Number",
  "description": "",
  "id": "buildnumber;verify-the-build-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User Launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Opens the URL \"http://localhost/login.do\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enters Username as \"admin\" and Password as \"manager\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Users click on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on help icon",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on about actiTime",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify the build number",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on close",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_Browser()"
});
formatter.result({
  "duration": 11144368700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost/login.do",
      "offset": 20
    }
  ],
  "location": "Steps.user_Opens_the_URL(String)"
});
formatter.result({
  "duration": 969668100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 25
    },
    {
      "val": "manager",
      "offset": 49
    }
  ],
  "location": "Steps.user_Enters_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 164718900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.users_click_on_login()"
});
formatter.result({
  "duration": 3074260800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_help_icon()"
});
formatter.result({
  "duration": 3471319300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_about_actiTime()"
});
formatter.result({
  "duration": 89244600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verify_the_build_number()"
});
formatter.result({
  "duration": 36892600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_close()"
});
formatter.result({
  "duration": 61104400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_the_browser()"
});
formatter.result({
  "duration": 4320319300,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Valid login",
  "description": "",
  "id": "login;valid-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Opens the URL \"http://localhost/login.do\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User Enters Username as \"admin\" and Password as \"manager\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Users click on login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Page url should be \"http://localhost/user/submit_tt.do\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User Click on logout link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Page url should be \"http://localhost/login.do\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_Browser()"
});
formatter.result({
  "duration": 9505788900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost/login.do",
      "offset": 20
    }
  ],
  "location": "Steps.user_Opens_the_URL(String)"
});
formatter.result({
  "duration": 758691400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 25
    },
    {
      "val": "manager",
      "offset": 49
    }
  ],
  "location": "Steps.user_Enters_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 156352200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.users_click_on_login()"
});
formatter.result({
  "duration": 3069700900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost/user/submit_tt.do",
      "offset": 20
    }
  ],
  "location": "Steps.page_url_should_be(String)"
});
formatter.result({
  "duration": 102532200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_Click_on_logout_link()"
});
formatter.result({
  "duration": 3153897400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost/login.do",
      "offset": 20
    }
  ],
  "location": "Steps.page_url_should_be(String)"
});
formatter.result({
  "duration": 52815000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_the_browser()"
});
formatter.result({
  "duration": 181280200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Login Data Driven",
  "description": "",
  "id": "login;login-data-driven",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User Launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User Opens the URL \"http://localhost/login.do\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User Enters Username as \"\u003cemail\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Users click on login",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Page url should be \"http://localhost/user/submit_tt.do\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User Click on logout link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Page url should be \"http://localhost/login.do\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "login;login-data-driven;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 27,
      "id": "login;login-data-driven;;1"
    },
    {
      "cells": [
        "admin",
        "manager"
      ],
      "line": 28,
      "id": "login;login-data-driven;;2"
    },
    {
      "cells": [
        "admin",
        "manager"
      ],
      "line": 29,
      "id": "login;login-data-driven;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Login Data Driven",
  "description": "",
  "id": "login;login-data-driven;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User Launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User Opens the URL \"http://localhost/login.do\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User Enters Username as \"admin\" and Password as \"manager\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Users click on login",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Page url should be \"http://localhost/user/submit_tt.do\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User Click on logout link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Page url should be \"http://localhost/login.do\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_Browser()"
});
formatter.result({
  "duration": 9464139600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost/login.do",
      "offset": 20
    }
  ],
  "location": "Steps.user_Opens_the_URL(String)"
});
formatter.result({
  "duration": 1761950600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 25
    },
    {
      "val": "manager",
      "offset": 49
    }
  ],
  "location": "Steps.user_Enters_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 155944900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.users_click_on_login()"
});
formatter.result({
  "duration": 3067428000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost/user/submit_tt.do",
      "offset": 20
    }
  ],
  "location": "Steps.page_url_should_be(String)"
});
formatter.result({
  "duration": 63567300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_Click_on_logout_link()"
});
formatter.result({
  "duration": 3169383600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost/login.do",
      "offset": 20
    }
  ],
  "location": "Steps.page_url_should_be(String)"
});
formatter.result({
  "duration": 59425400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_the_browser()"
});
formatter.result({
  "duration": 101903100,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Login Data Driven",
  "description": "",
  "id": "login;login-data-driven;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User Launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User Opens the URL \"http://localhost/login.do\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User Enters Username as \"admin\" and Password as \"manager\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Users click on login",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Page url should be \"http://localhost/user/submit_tt.do\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User Click on logout link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Page url should be \"http://localhost/login.do\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_Browser()"
});
formatter.result({
  "duration": 9459308900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost/login.do",
      "offset": 20
    }
  ],
  "location": "Steps.user_Opens_the_URL(String)"
});
formatter.result({
  "duration": 2392651600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 25
    },
    {
      "val": "manager",
      "offset": 49
    }
  ],
  "location": "Steps.user_Enters_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 148008400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.users_click_on_login()"
});
formatter.result({
  "duration": 3074479400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost/user/submit_tt.do",
      "offset": 20
    }
  ],
  "location": "Steps.page_url_should_be(String)"
});
formatter.result({
  "duration": 61479600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_Click_on_logout_link()"
});
formatter.result({
  "duration": 3181343600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost/login.do",
      "offset": 20
    }
  ],
  "location": "Steps.page_url_should_be(String)"
});
formatter.result({
  "duration": 56493000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_the_browser()"
});
formatter.result({
  "duration": 97309900,
  "status": "passed"
});
});