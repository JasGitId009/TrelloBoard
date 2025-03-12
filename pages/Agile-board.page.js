const { expect } = require('@playwright/test');

exports.Loginpage=
class Loginpage{

constructor(page) {
        this.page=page;
        //login
        this.loginbutton1="//a[@class='Buttonsstyles__Button-sc-1jwidxo-0 kTwZBr']"
        this.emailid='#username'
        this.rembermecheckbox='//input[@type="checkbox"]'
        this.continuebutton="//button[@class='css-t8mx7z']"
        this.password='#password'
        this.loginbutton='//button[@type="submit"]'


         //templates
         this.more=this.page.getByText("//button[@title='More']");
         this.template= this.page.getByText('Templates');                                     
         this.meetingAgenda=this.page.locator('.VSxlmEYC3befsX').nth(1);
         this.boardtitle= this.page.getByTestId('create-board-submit-button');
         this.info= this.page.locator('//li[@data-testid="list-wrapper"][1] //li[2]');
         this.Teammembertopic = this.page.locator('//li[@data-testid="list-wrapper"][2] //button[@data-testid="list-add-card-button"]');
         this.done = this.page.locator('//li[@data-testid="list-wrapper"][5]//button[@data-testid="list-add-card-button"]');

        }

        async gotoUrl(){
            await this.page.goto("https://trello.com/home")
         }
    
         async login(emailid,password){
            await this.page.locator(this.loginbutton1).click();
            await this.page.locator(this.emailid).fill(emailid)
            await this.page.locator(this.rembermecheckbox).check();
            await this.page.locator(this.continuebutton).click();
            await this.page.locator(this.password).fill(password)
            await this.page.locator(this.loginbutton).click();
         }
   //templates
 async getMore(){
    await this.more.click();
}

async getTemplate(){
    await this.template.click();
}

async getMeetingAgenda(){
    await this.meetingAgenda.click();
}

async getBoardTitle(){
    await this.boardtitle.click();
}

async getAddacard(){
    await this.addacard.fill();
}

async getInfo(){
    await this.info.Drag();
}

async getTeam(){
     await this.Teammembertopic.Drop();
}

async getDone(){
    await this.done.fill();
}
}  