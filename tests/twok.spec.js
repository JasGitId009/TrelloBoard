import {test,expect} from '@playwright/test'

test('Log in to two k',async({page})=>{
    await page.goto("https://dev.portal.2k.com/")
    await page.locator("//input[@id='email']").fill("sjasaswee@gmail.com");
    await page.locator("//input[@id='password']").fill("MUlpM7hKCySBbheJD5pV!");
    await page.getByRole("button", { name: "Log In" }).click();
    await page.getByTestId('t2gp-panel-/portal/account-detail/information').getByTestId('t2gp-panel-update-button').click();
    // await page.locator("(//button[contains(@type,'button')])[3]").click();
    await page.locator("//input[@id='firstName']").fill("Test Fname");
    await page.locator("//input[@id='lastName']").fill("Test Lname");
    await page.locator("//input[@id='displayName']").fill("Dispname");
    // await page.getByRole("button", { name: "DName" }).click();
    // await page.getByRole("button", { name: "Log Out" }).click();
    await page.getByText("Log Out");

    
});
   


