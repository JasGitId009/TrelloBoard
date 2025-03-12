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


    await page.getByText('Add a more detailed description…').click();
    // await page.getByTestId('toolbar-block-type-text-styles-icon').nth(2).click();
    await page.waitForTimeout(1000)
    await page.getByTestId("editor-toolbar__Bold").click()  //select bold
    // await page.getByLabel("Main content area, start typing to enter text.").click()
    await page.getByLabel("Main content area, start typing to enter text.").type('GOAL : ');
    await page.waitForTimeout(2000)
    await page.keyboard.press('Enter');
    await page.locator("//span[@class='css-70qvj9']//span[@class='css-snhnyn']").click();
    await page.locator("//span[@aria-label='Heading 4 Ctrl+Alt+4']//span[@class='css-uokyes']").click()
    await page.waitForTimeout(2000)
    await page.getByLabel("Main content area, start typing to enter text.").type('The sales team is working to increase the pipeline in Q2 to see measurable differences in Q3 revenue reports.')
    await page.waitForTimeout(2000)
    await page.locator("button[aria-label='Link Ctrl+K'] span[class='css-snhnyn']").click();
    await page.getByPlaceholder("Paste a link").fill("https://learning.postman.com/")
    await page.getByTestId("link-text").fill("Roles & Responsibility")
    await page.getByTestId("link-picker-insert-button").click()

    await page.locator("//button[@aria-label='Attach and insert link']//span[@class='css-snhnyn']").click()
    await page.waitForTimeout(2000)
    const fileName = await page.locator(".tlF6SQYm7lbZnR").click()
    await page.waitForTimeout(1000)
    await fileName.setInputFiles(path.join(process.cwd(),'/test_data/testfile1.pdf'));

    await page.getByLabel("Insert elements").click();
    await page.getByText("Mention someone to send them a notification").click();
    await page.locator('(//div[@class="css-23l62s"])[1]').click()
    await page.getByTestId("MarkdownIcon").click();






    await page.getByTestId("description-save-button").click();
    await page.close();
    
})