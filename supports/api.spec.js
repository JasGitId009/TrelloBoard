const { expect,test} = require('@playwright/test');
const { request } = require('node:http');
import {api_key,token,baseURL} from '../supports/constant.spec'

// test('launch trello page',async({request})=>{

//    const response = await request.post('https://api.trello.com/1/boards/?name=Automaion Trello&key=b886fc171bf078d436a8890f949d51d4&token=ATTAfc6f0b083de0bdc634e5a227a81c3a9555b17c57ce3c6f274c092ff59f497b336C5B2C34')

//    console.log(await response.json()); 
//    expect(response.status()).toBe(200);  

  
      
//  })

 test ("api testing", async({request})=>{
   const res= await request.post(`${baseURL}/boards/?name=AutomaionTrello&key=${api_key}&token=${token}`);
   console.log(await res.json()); 
   expect(res.status()).toBe(200);
 })
