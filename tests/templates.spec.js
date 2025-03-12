import {test,expect} from '@playwright/test';
import { Loginpage } from '../pages/loginpage';

test.beforeEach(async ({browser})=>{
    page = await browser.newPage();

    await page.gotoUrl();
    await page.setViewportSize({
        width:1920,
        height:1040
    })
    await page.getloginbutton1();
    await page.getEmailid("jasasweesethy81@gmail.com")
    await page.getRemberMeCheckbox();
    await page.getcontinuebutton();
    await page.getPassword("Guddy90901616");
    await page.getLoginbutton();
});

test.afterEach(async()=>{
    await page.locator('.DweEFaF5owOe02 S7RWiPL9Qgl9P9 kFZ3hS99jGmKWk').click();
    await page.getByText("Log out").click();

})


test('launch trello page',async({page})=>{

    const loginpage=new Loginpage(page);
    await loginpage.gotoUrl();
    await page.setViewportSize({
        width:1920,
        height:1040
    })
    await loginpage.getloginbutton1();
    await loginpage.getEmailid("jasasweesethy81@gmail.com")
    await loginpage.getRemberMeCheckbox();
    await loginpage.getcontinuebutton();
    await loginpage.getPassword("Guddy90901616");
    await loginpage.getLoginbutton();
    // await loginpage.getMore();
    await loginpage.getTemplate();
    await loginpage.getMeetingAgenda();
    await loginpage.getBoardTitle();



})
