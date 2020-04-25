import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class pageTest {
	public static void main(String[] args) throws InterruptedException {
		System.setProperty("webdriver.chrome.driver","C:\\\\\\\\Users\\\\\\\\26753\\\\\\\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("http://10.12.115.166:8000/");
		Thread.sleep(1500);
		WebElement nextButton = driver.findElement(By.id("networkBtn"));		
		nextButton.click();
		Thread.sleep(1500);
		nextButton = driver.findElement(By.id("displayBtn"));		
		nextButton.click();
		Thread.sleep(1500);
		nextButton = driver.findElement(By.id("hardwareBtn"));		
		nextButton.click();
		Thread.sleep(1500);
		nextButton = driver.findElement(By.id("nextBtn"));		
		nextButton.click();
		System.out.println("Test completed");
	}
}