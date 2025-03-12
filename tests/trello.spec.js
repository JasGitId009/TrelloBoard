import {test,expect} from '@playwright/test'

// test('launch trello page',async({page})=>{
//     test.slow();
//     await page.goto("https://trello.com/home");
//     // await page.getByTestId('#MJFtCCgVhXrVl7v9HA7EH_login').click();
//     await page.locator("//a[@class='Buttonsstyles__Button-sc-1jwidxo-0 kTwZBr']").click();
//     await page.locator('#username').fill("jasasweesethy81@gmail.com");
//     await page.locator('//input[@type="checkbox"]').check();
//     await page.getByRole("button", {name:"Continue"}).click();
//     await page.locator('#password').fill("Guddy90901616");
//     await page.getByRole("button", { name: "Log In" }).click();
//     await page.getByRole("button",{name:"Workspaces"}).click();
//     await page.locator('.TaNgu9ncpvX1uL').click();
//     await page.locator("//div[contains(text(),'Test playwright')]").click();
//     await page.locator("//li[@data-testid='list-wrapper'][1]").getByRole("button",{name:"Add a card"}).click();
//     await page.locator("//textarea[@data-testid='list-card-composer-textarea']").fill("TicketNo1");
//     await page.keyboard.press("Enter");
    // await page.locator("//button[@type='submit']").click();



//     const ToDo=await page.locator("(//a[@class='NdQKKfeqJDDdX3'][normalize-space()='TicketNo1'])[3]")
//     const Doing=await page.locator("(//button[contains(@type,'button')][normalize-space()='Add a card'])[1]")
//     await ToDo.dragTo(Doing)
//     await page.waitForTimeout(2000)
//     await page.close();
// })

test('template',async({page})=>{
    test.slow();
    await page.goto("https://trello.com/home");
    await page.setViewportSize({
        width:1920,
        height:1040
    })
    await page.getByTestId('#MJFtCCgVhXrVl7v9HA7EH_login').click();
    await page.locator("//a[@class='Buttonsstyles__Button-sc-1jwidxo-0 kTwZBr']").click();
    await page.locator('#username').fill("jasasweesethy81@gmail.com");
    await page.locator('//input[@type="checkbox"]').check();
    await page.getByRole("button", {name:"Continue"}).click();
    await page.locator('#password').fill("Guddy90901616");
    await page.getByRole("button", { name: "Log In" }).click();

    await page.getByText('Templates').click(); 
    await page.waitForTimeout(2000);                                 
    await page.locator('.VSxlmEYC3befsX').nth(0).click();
    await page.waitForTimeout(2000);
    await page.getByTestId('create-board-submit-button').click();

    const info =await page.locator('//li[@data-testid="list-wrapper"][1]//li[6]');
    const Teammembertopic = await page.locator('//li[@data-testid="list-wrapper"][2] //button[@data-testid="list-add-card-button"]');
    await info.dragTo(Teammembertopic);
    await page.waitForTimeout(2000)
    await page.locator('//li[@data-testid="list-wrapper"][5]//button[@data-testid="list-add-card-button"]');
    await page.close();
 })

// test('template',async({page})=>{
//     test.slow();
//     await page.goto("https://trello.com/home");
//     await page.setViewportSize({
//         width:1920,
//         height:1040
//     })
//     // await page.getByTestId('#MJFtCCgVhXrVl7v9HA7EH_login').click();
//     await page.locator("//a[@class='Buttonsstyles__Button-sc-1jwidxo-0 kTwZBr']").click();
//     await page.locator('#username').fill("jasasweesethy81@gmail.com");
//     await page.locator('//input[@type="checkbox"]').check();
//     await page.getByRole("button", {name:"Continue"}).click();
//     await page.locator('#password').fill("Guddy90901616");
//     await page.getByRole("button", { name: "Log In" }).click();

//     await page.getByText('Templates').click(); 
//     await page.waitForTimeout(2000);                                 
//     await page.locator('.VSxlmEYC3befsX').nth(1).click();
//     await page.waitForTimeout(2000);
//     await page.getByTestId('create-board-submit-button').click();
//     await page.locator('//li[@data-testid="list-wrapper"][1]//li[2]').click();
//     await page.waitForTimeout(2000)
//     await page.locator("//span[@class='XU4D15iDLJXez_']").click();
//     await page.waitForTimeout(2000)
//     await page.locator("//div[@data-testid='move-card-popover-select-board-destination']//span[@class = 'css-17zzl5o']").click();
//     const options = await page.$$("//div[@role='option']//li");
//     console.log('Number of Move card items', options.length);
//     for (let option of options) {
//       const text = await option.textContent();
//       console.log(text);
//     }
//     await options[2].click();
//     await page.getByTestId("move-card-popover-move-button").click();
//     await page.waitForTimeout(1000)
//     await page.close();
// })




//Description ,join, members, Notifications
// test('Descriptions, join members, Notifications',async({page})=>{
//     test.slow();
//     await page.goto("https://trello.com/home");
//     await page.setViewportSize({
//         width:1920,
//         height:1040
//     })
//     await page.locator("//a[@class='Buttonsstyles__Button-sc-1jwidxo-0 kTwZBr']").click();
//     await page.waitForTimeout(2000)
//     await page.locator("//a[@class='Buttonsstyles__Button-sc-1jwidxo-0 kTwZBr']").click();
//     await page.locator('#username').fill("jasasweesethy81@gmail.com");
//     await page.locator('//input[@type="checkbox"]').check();
//     await page.getByRole("button", {name:"Continue"}).click();
//     await page.locator('#password').fill("Guddy90901616");
//     await page.getByRole("button", { name: "Log In" }).click();
//     await page.waitForTimeout(2000)

//     await page.getByTestId("templates-menu").click(); 
//     await page.waitForTimeout(2000);                                 
//     await page.locator('.VSxlmEYC3befsX').nth(1).click();
//     await page.waitForTimeout(2000);
//     await page.getByTestId('create-board-submit-button').click();
//     await page.locator('//li[@data-testid="list-wrapper"][1]//li[2]').click();
//     await page.waitForTimeout(2000)

    // await page.getByText("Join").click();
    // await page.getByText("Leave").click();

    // await page.getByTestId("card-back-members-button").click();
    // await page.getByPlaceholder("Search members").fill("Jasaswee Sethy")
    // await page.waitForTimeout(2000)
    // await page.getByTestId("popover-close").click();
    // await page.getByText("Watch").click();

    // await page.getByText("Add a more detailed description…").click();
    // await page.waitForTimeout(1000)
    // await page.locator("#ak-editor-textarea").fill("Successfully submitted")
    // await page.getByText("Save").click();
    // await page.waitForTimeout(2000)


    //-------------------date picker--------------------------
    // await page.getByTestId("card-back-due-date-button").click();
    // await page.getByText("February 2025").textContent();
    // await page.getByTestId("clickable-checkbox").check();
    // await page.getByTestId("start-date-field","03/11/2025");


