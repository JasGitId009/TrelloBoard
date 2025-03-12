import {test,expect} from '@playwright/test'

test('Descriptions, join members, Notifications',async({page})=>{
    test.slow();
    await page.goto("https://trello.com/home");
    await page.setViewportSize({
        width:1920,
        height:1040
    })
    await page.locator("//a[@class='Buttonsstyles__Button-sc-1jwidxo-0 kTwZBr']").click();
    await page.waitForTimeout(2000)
    await page.locator('#username').fill("jasasweesethy81@gmail.com");
    await page.locator('//input[@type="checkbox"]').check();
    await page.getByRole("button", {name:"Continue"}).click();
    await page.locator('#password').fill("Guddy90901616");
    await page.getByRole("button", { name: "Log In" }).click();
    await page.waitForTimeout(2000)

    //Boards
    await page.getByText("View all closed boards").click()
    await page.locator("(//button[@type='button'][normalize-space()='Delete'])[1]").click()
    await page.getByTestId("close-board-delete-board-confirm-button").click()


})