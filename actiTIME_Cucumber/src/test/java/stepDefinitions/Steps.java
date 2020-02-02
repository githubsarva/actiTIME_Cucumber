package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.*;
import junit.framework.*;
import pageObjects.LoginPage;
import pageObjects.VerifyBuild;

public class Steps extends BaseClass {
	
	@Given("^User Launch Chrome Browser$")
	public void user_Launch_Chrome_Browser() {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"./Drivers/chromedriver.exe");
		driver= new ChromeDriver();
		lp=new LoginPage(driver);
		driver.manage().window().maximize();
	}

	@When("^User Opens the URL \"([^\"]*)\"$")
	public void user_Opens_the_URL(String url) {
		
		driver.get(url);
		
	}

	@When("^User Enters Username as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
	public void user_Enters_Username_as_and_Password_as(String uname, String pwd) {
		
		lp.setUsername(uname);
		lp.setPassword(pwd);
	}

	@When("^Users click on login$")
	public void users_click_on_login() throws InterruptedException {
	lp.clickLoginButton();
	Thread.sleep(3000);
	}

	@Then("^Page url should be \"([^\"]*)\"$")
	public void page_url_should_be(String url) {
		/*
		if(driver.getPageSource().contains("actiTIME -  Enter Time-Track")){
			Assert.assertTrue(true);
		}else
		{
			Assert.assertFalse(false);
		}*/
	
		if(driver.getPageSource().contains("Username or Password is invalid. Please try again..")){
			
			driver.close();
			
			Assert.assertTrue(false);
		}else{
			System.out.println("88888888888888888");
			System.out.println(driver.getTitle());
			System.out.println(driver.getCurrentUrl());
			System.out.println("*********************");
			Assert.assertEquals(url, driver.getCurrentUrl());
			
			
		}
		
	
	}

	@When("^User Click on logout link$")
	public void user_Click_on_logout_link() throws InterruptedException {
		
		lp.clickLogoutlink();
		Thread.sleep(3000);
	}

	@Then("^Close the browser$")
	public void close_the_browser() {
		driver.close();
	}

// Verify the build number
	
	@Then("^Click on help icon$")
	public void click_on_help_icon() throws InterruptedException {
		
		vb= new VerifyBuild(driver);
		vb.clickHelpicon();
		Thread.sleep(3000);
		
	}

	@Then("^Click on about actiTime$")
	public void click_on_about_actiTime(){
		
		vb.clickaboutactiTime();
	}

	@Then("^Verify the build number$")
	public void verify_the_build_number(){
		
		Assert.assertEquals("(build 21009),",vb.getBuildnumber());
		

	
	}

	@Then("^Click on close$")
	public void click_on_close() {
		vb.clickClose();
	}


}
