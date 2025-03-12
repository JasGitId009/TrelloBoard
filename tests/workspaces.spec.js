import {test,expect} from '@playwright/test';
import { Loginpage } from '../pages/trellologinpage';

test('launch trello page',async({page})=>{

    const loginpage=new Loginpage(page);
    await loginpage.gotoUrl();
    await loginpage.getloginbutton1();
    await loginpage.getEmailid("jasasweesethy81@gmail.com")
    await loginpage.getRemberMeCheckbox();
    await loginpage.getcontinuebutton();
    await loginpage.getPassword("Guddy90901616");
    await loginpage.getLoginbutton();
    await loginpage.getWorkspaces();
    await loginpage.getyourworkspace();
    await loginpage.getTestplaywright();
    await loginpage.getAddacard("TicketNo1");
    await loginpage.getEnter();
    await loginpage.getToDotoDoing()
   
})


