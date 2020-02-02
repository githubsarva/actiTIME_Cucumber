package stepDefinitions;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.PropertyConfigurator;
import org.junit.Assert;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import junit.framework.*;
import pageObjects.LoginPage;
import pageObjects.VerifyBuild;

public class Steps extends BaseClass {
    @Before
	public void setup() throws IOException, InterruptedException{
    	
    	configProp = new Properties();
    	FileInputStream configPropfile=new FileInputStream("config.properties");
    	configProp.load(configPropfile);
    	
    	logger=logger.getLogger("actiTIME");
		PropertyConfigurator.configure("Log4j.properties");
		String br=configProp.getProperty("browser");
		if(br.equals("chrome")){
			
		System.setProperty("webdriver.chrome.driver",configProp.getProperty("chromepath"));
		
		
		driver = new ChromeDriver();
		}else if(br.equals("firefox")){
			System.setProperty("webdriver.gecko.driver",configProp.getProperty("firefoxpath"));
			driver = new FirefoxDriver();
		}else if(br.equals("ie")){
Thread.sleep(3000);
			System.setProperty("webdriver.ie.driver",configProp.getProperty("iepath"));
			driver = new InternetExplorerDriver();
		}
		logger.info("******Opening Browsers******");
		driver.manage().window().maximize();
    }
	@Given("^User Launch Chrome Browser$")
	public void user_Launch_Chrome_Browser() {
		
		lp=new LoginPage(driver);
		
	}

	@When("^User Opens the URL \"([^\"]*)\"$")
	public void user_Opens_the_URL(String url) {
		logger.info("******Entering the URL******");
		driver.get(url);
		
	}

	@When("^User Enters Username as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
	public void user_Enters_Username_as_and_Password_as(String uname, String pwd) {
		logger.info("******Providing User name and Password******");
		lp.setUsername(uname);
		lp.setPassword(pwd);
	}

	@When("^Users click on login$")
	public void users_click_on_login() throws InterruptedException {
	lp.clickLoginButton();
	Thread.sleep(3000);
	logger.info("******Click on Login Button******");
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
			logger.info("******Asserting the title******");
			
		}
		
	
	}

	@When("^User Click on logout link$")
	public void user_Click_on_logout_link() throws InterruptedException {
		
		lp.clickLogoutlink();
		Thread.sleep(3000);
		logger.info("******Click logout******");
	}

	@Then("^Close the browser$")
	public void close_the_browser() {
		driver.close();
		logger.info("******Close the browser******");
	}

// Verify the build number
	
	@Then("^Click on help icon$")
	public void click_on_help_icon() throws InterruptedException {
		
		vb= new VerifyBuild(driver);
		vb.clickHelpicon();
		Thread.sleep(3000);
		logger.info("****Click on help icon******");
		
	}

	@Then("^Click on about actiTime$")
	public void click_on_about_actiTime(){
		
		vb.clickaboutactiTime();
		logger.info("******Click on about actitime link******");
	}

	@Then("^Verify the build number$")
	public void verify_the_build_number(){
		
		Assert.assertEquals("(build 21009),",vb.getBuildnumber());
		

		logger.info("******Asserting the build number******");
	}

	@Then("^Click on close$")
	public void click_on_close() {
		vb.clickClose();
		logger.info("******Close the build pop up******");
	}


}
