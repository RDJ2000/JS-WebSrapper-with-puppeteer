
const puppeteer = require('puppeteer');
const {parse}=require('node-html-parser')
async function scrapeChannel(url) {

    const browser = await puppeteer.launch({headless: false,executablePath: '/usr/bin/chromium-browser'});
    try{
    const page = await browser.newPage();
    await page.goto(url);
    const data=await page.evaluate(()=>document.body.innerHTML);
    const dom = parse(data)
    let requiredData=[]
    requiredData=dom.querySelectorAll(" your required query eg=h3.h4.text-black span span span")
    console.log(requiredData.length);  
    for (let index = 0; index < requiredData.length; index++) {
        console.log(index+'-'+requiredData[index].innerText);   
    }
    // let title=[]
    // title=dom.querySelectorAll("h3.h4.text-black span span span")
    // console.log(title.length);  

}
catch(err){
    console.error(err.message);
}
finally{
    browser.close();

    
}
}
scrapeChannel("Your URL");


