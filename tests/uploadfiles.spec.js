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


    //Attachments
    await page.getByTestId("card-back-attachment-button").click();
    // await page.getByText("Choose a file").setInputFiles(path.join(process.cwd(),'/test_data/testfile1.pdf'));
    // await page.getByText('Choose a file').setInputFiles('./test_data/testfile1.pdf')                                     //single file
    await page.getByText('Choose a file').setInputFiles(['test_data/testfile1.pdf','test_data/testfile002.pdf.pdf'])         //multiple files
    await page.waitForTimeout(2000)







});