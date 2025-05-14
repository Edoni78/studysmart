using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;
using System;

class Program
{
    static void Main(string[] args)
    {
        IWebDriver driver = new ChromeDriver();

        try
        {
            driver.Navigate().GoToUrl("http://localhost:3000/register");

            var wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            wait.Until(d => d.FindElement(By.CssSelector("form")));

            var usernameInput = driver.FindElement(By.Id("username"));
            var emailInput = driver.FindElement(By.Id("email"));
            var passwordInput = driver.FindElement(By.Id("password"));
            var submitBtn = driver.FindElement(By.CssSelector("button[type='submit']"));

            usernameInput.SendKeys("edontest3214");
            emailInput.SendKeys("edontest3211@example.com");
            passwordInput.SendKeys("Test123!.");
            submitBtn.Click();

           
            wait.Until(d => d.Url.Contains("/login"));

            Console.WriteLine(" Regjistrimi: SUKSES");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error gjatë testit: {ex.Message}");
        }
        finally
        {
            driver.Quit();
        }
    }
}