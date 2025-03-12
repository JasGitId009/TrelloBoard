import {test} from '@playwright/test';
import { Loginpage } from '../pages/Agile-board.page';

test('launch trello page',async({page})=>{
    //Login
    const loginpage=new Loginpage(page);
    await loginpage.gotoUrl();
    await loginpage.login("jasasweesethy81@gmail.com","Guddy90901616");

    
    //Agile board
    await loginpage.getMore();
    await loginpage.getTemplate();
    await loginpage.getMeetingAgenda();
    await loginpage.getBoardTitle();
    await loginpage.getAddacard();
    await loginpage.getInfo();
    await loginpage.getTeam();
    await loginpage.getDone()
   
  })



