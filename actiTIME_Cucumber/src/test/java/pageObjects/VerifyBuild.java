package pageObjects;

import javax.swing.SortingFocusTraversalPolicy;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class VerifyBuild {
	
	public WebDriver ldriver;
	public VerifyBuild(WebDriver rdriver){
		ldriver=rdriver;
		PageFactory.initElements(rdriver, this);
	}
	
	@FindBy(xpath="//div[@class='popup_menu_icon support_icon']/div")
	WebElement helpicon;
	
	@FindBy(xpath="//div[@id='popup_menu_support']//following-sibling::li[8]")
	WebElement aboutactiTime;
	
	@FindBy(xpath="//img[@title='Close']")
	WebElement close;
	
	@FindBy(xpath="//span[text()='(build 21009),']")
	WebElement buildnumber;
	
	public void clickHelpicon(){
		helpicon.click();
	}
	
	public void clickaboutactiTime(){
		aboutactiTime.click();
	}

	public void clickClose(){
		close.click();
	}
	public String getBuildnumber(){
		return buildnumber.getText();
		
		
		
	}

}
