import {test} from '@playwright/test';
import { Loginpage } from '../pages/trellologinpage';

test('launch trello page',async({page})=>{
    //Login
    const loginpage=new Loginpage(page);
    await loginpage.gotoUrl();
    await loginpage.login("jasasweesethy81@gmail.com","Guddy90901616");
    await loginpage.getWorkspaces();
    
    //Workspace 
    await loginpage.getyourworkspace();
    await loginpage.getTestplaywright();
    await loginpage.getAddacard("TicketNo1");
    await loginpage.getEnter();
    await loginpage.getToDotoDoing()
  })