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

    await page.getByTestId("templates-menu").click(); 
    await page.waitForTimeout(2000);                                 
    await page.locator('.VSxlmEYC3befsX').nth(1).click();
    await page.waitForTimeout(2000);
    await page.getByTestId('create-board-submit-button').click();
    await page.locator('//li[@data-testid="list-wrapper"][1]//li[2]').click();
    await page.waitForTimeout(2000)

    async function updateDueDateLoop(page, startDate, dueDate, iterations) {
        let count = 0;
        while (count < iterations) {
            console.log(`Iteration: ${count + 1}`);
            await page.getByTestId("card-back-due-date-button").click();
            await page.locator('//span[@class="CpyGgjAzUkQDno"]').check();
            await page.getByTestId('start-date-field').fill('');
            await page.getByTestId('start-date-field').fill(startDate);
            await page.locator("(//span[@class='VhaiZhQslxcjfC'])[2]").uncheck();
            await page.waitForTimeout(2000);
            await page.locator("(//span[@class='VhaiZhQslxcjfC'])[2]").check();
            await page.waitForTimeout(2000);
            await page.getByTestId('due-date-field').fill('');
            await page.waitForTimeout(2000);
            await page.getByTestId('due-date-field').fill(dueDate);
            await page.waitForTimeout(2000);
            await page.getByTestId('save-date-button').click();
        
            count++;
          }
        }
        await updateDueDateLoop(page, '2/2/2025', '2/10/2025', 5);
        await page.close();
});