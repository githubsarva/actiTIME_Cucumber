package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	
	public WebDriver ldriver;
	
	public LoginPage(WebDriver rdriver){
		ldriver=rdriver;
		PageFactory.initElements(rdriver, this);
	}
	
	@FindBy(xpath="//input[@name='username']")
	WebElement username;
	
	@FindBy(xpath="//input[@name='pwd']")
	WebElement password;
	
	@FindBy(id="loginButton")
	WebElement loginbutton;
	
	@FindBy(id="logoutLink")
	WebElement logoutlink;
	


public void setUsername(String uname){
	username.sendKeys(uname);
	
}

public void setPassword(String pwd){
	password.sendKeys(pwd);
}

public void clickLoginButton(){
	loginbutton.click();
}
public void clickLogoutlink(){
	logoutlink.click();
}
}