import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class queueTest {
	public static void main(String[] args) throws InterruptedException {
		System.setProperty("webdriver.chrome.driver","C:\\\\\\\\Users\\\\\\\\26753\\\\\\\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("D:\\Github\\ESC\\js queue\\index.html");
		Thread.sleep(1500);
		WebElement nextButton = driver.findElement(By.id("tag1"));		
		nextButton.click();
		Thread.sleep(1500);
		nextButton = driver.findElement(By.id("tag2"));		
		nextButton.click();
		Thread.sleep(1500);
		nextButton = driver.findElement(By.id("tag2"));		
		nextButton.click();
		System.out.println("Test completed");
	}
}
