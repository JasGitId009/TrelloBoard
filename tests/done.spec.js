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
   

    //join & leave
    // await page.getByText("Join").click();
    // await page.getByText("Leave").click();

    //members
    // await page.getByTestId("card-back-members-button").click();
    // await page.getByPlaceholder("Search members").fill("Jasaswee Sethy")
    // await page.waitForTimeout(2000)
    // await page.getByTestId("popover-close").click();

    //watch notification
    // await page.getByText("Watch").click();

    //Description
    // await page.getByText("Add a more detailed description…").click();
    // await page.waitForTimeout(1000)

    //image
    // await page.getByTestId('Image').click();
    // await page.waitForTimeout(2000);
    // await page.locator("//label[normalize-space()='Upload from your computer']")
    // await page.waitForTimeout(2000);
    // const filePath='second1.PNG'
    // await page.setInputFiles('input[type="file"]', filePath);
    // await page.waitForTimeout(2000);

    //text area
    // await page.locator("#ak-editor-textarea").fill("Successfully submitted")
    // await page.getByText("Save").click();

    // calender

    // await page.getByTestId("card-back-due-date-button").click();
    // await page.locator('//span[@class="CpyGgjAzUkQDno"]').check();
    // await page.getByTestId('start-date-field').fill('')
    // await page.getByTestId('start-date-field').fill('2/2/2025');
    // await page.locator("(//span[@class='VhaiZhQslxcjfC'])[2]").uncheck();
    // await page.waitForTimeout(2000)
    // await page.locator("(//span[@class='VhaiZhQslxcjfC'])[2]").check();
    // await page.waitForTimeout(2000);
    // await page.getByTestId('due-date-field').fill(" ")
    // await page.waitForTimeout(2000);
    // await page.getByTestId('due-date-field').fill("2/10/2025")
    // await page.waitForTimeout(2000);
    // await page.getByTestId('save-date-button').click();

// await page.getByTestId('card-back-due-datebutton').click() 
// const month ='feb 2025', date = '9'; 
// while (true){    
//  const currentMonth = await page.locator('.css-1b2rkmw').textContent()   
//   if( currentMonth == month){       
//   break;     }    
//  await page.click("//div[@class='atlaskit-portal-container']//button[2]//span[1]//span[1]") }
//  await page.click(`//button[@class='css-1w4y8d4'][text()='${date}']`)
//  await page.getByTestId("save-date-button").click()



 /*await page.getByTestId('card-back-due-datebutton').click();
 await page.waitForTimeout(2000)
 await page.locator('//span[@class="CpyGgjAzUkQDno"]').check();
const month = 'feb 2025', date = '9';

while (true) {    
  const currentMonth = await page.locator('.css-1b2rkmw').textContent();

  // Trim the text content and make sure it's lowercase for comparison
  if (currentMonth.trim().toLowerCase() === month.toLowerCase()) {       
    break;     
  }    

  // Click to move to the next month
  await page.locator("(//span[@class='VhaiZhQslxcjfC'])[2]").check();
  await page.click("//div[@class='atlaskit-portal-container']//button[2]//span[1]//span[1]");
}

await page.click(`//button[@class='css-1w4y8d4' and text()='${date}']`);
await page.getByTestId("save-date-button").click();
*/


//checklist
    // await page.getByTestId("card-back-checklist-button").click();
    // await page.locator('//input[@id="id-checklist"]').fill('Checklist');
    // await page.waitForTimeout(2000);
    // await page.locator("button[type='submit']").click();
    // await page.getByTestId("checklist-delete-button").click();


    //Attachment
    // await page.getByTestId("card-back-attachment-button").click();
    // await page.waitForTimeout(2000)
    // const file=await page.locator(".tlF6SQYm7lbZnR").click()
    // await page.setInputFiles(file,path.join(process.cwd(),'/test_data/testfile1.pdf'))
    // await page.waitForTimeout(2000)

    await page.getByTestId("card-back-attachment-button").click();
    await page.waitForTimeout(2000);

    const fileName = await page.locator(".tlF6SQYm7lbZnR").click()
    await page.waitForTimeout(1000)
    await fileName.setInputFiles(path.join(process.cwd(),'/test_data/testfile1.pdf'));

    await page.waitForTimeout(2000);
   
    
    // await page.locator("#url-uid1").fill("https://www.youtube.com/watch?v=T__TlfP-ln0");
    // await page.locator("#displayText-uid2").fill("Displaying");
    // await page.getByText("Insert").click();

    //location
    // await page.getByTestId("card-back-sidebar-location-button").click();
    // await page.waitForTimeout(2000)
    // await page.getByPlaceholder("Search Google Maps").fill("Bengaluru");
    // await page.waitForTimeout(2000)
    // await page.keyboard.press("Enter");

    
    //cover
    // await page.getByTestId("card-back-cover-button").click();
    // await page.waitForTimeout(2000)
    // await page.getByText("Search for photos").click();
    // await page.waitForTimeout(2000)
    // await page.getByPlaceholder("Search Unsplash for photos").fill("productivity")
    // await page.waitForTimeout(2000)
    // await page.locator("a[title='Minh Pham']").click();

    
    //Custom fields
    // await page.getByTestId('card-back-custom-fields-button').click()
    // await page.locator("(//button[contains(@type,'button')][normalize-space()='Add'])[2]").click()




    
    await page.close();
















})