let {Builder, By} = require('selenium-webdriver');

async function TV_PriceMaker(param_1, param_2){
    let driver = new Builder().forBrowser('chrome').build();
    let res;
    try {
        await driver.get('https://market.yandex.ru');
        const originalWindow = await driver.getWindowHandle();
        //await driver.manage().window().maximize();
        await driver.findElement(By.xpath('//span[text()="Электроника"]/parent::a')).click();
        try{
            await driver.findElement(By.xpath('//a[text()="Телевизоры"]')).click();
        } catch (err)
        {
            await driver.findElement(By.xpath('//div[@class="CheckboxCaptcha-Anchor"]')).click();
            await driver.wait(
                async () => (await driver.findElement(By.xpath('//a[text()="Телевизоры"]')).click(), 5000)
            );
        };
        await driver.findElement(By.id('glpricefrom')).sendKeys(param_1);
        for (let i=0; i<param_2.length; i++)
            await driver.findElement(By.xpath('//span[text()="'+param_2[i]+'"]')).click();
        while(1){
            try {
                await driver.findElement(By.xpath('//div[@class="_2LvbieS_AO _1oZmP3Lbj2"]'));
            } catch (err) {
                break;
            }
        }
        await driver.findElement(By.xpath('//h3/a/span')).click();
        await driver.wait(async () => (await driver.getAllWindowHandles()).length === 2, 10000);
        const windows = await driver.getAllWindowHandles();
        for(let i=0; i<2; i++)
            if (windows[i] != originalWindow)
            {
                await driver.switchTo().window(windows[i]);
                break;
            }
        let resPrice = await driver.findElement(By.xpath('//div[@class = "_3NaXxl-HYN _3kWlKUNlTg"]/span/span')).getText();
        resPrice = parseInt(String(resPrice).replace(/\s/g, ''));
        let resMaker = await driver.findElement(By.xpath('//meta[@content = "2"]/following-sibling::div/a/span')).getText();
        res = [resPrice, resMaker];
    } catch (err) {
        console.error(err);
        res = [];
    }
    await driver.quit();
    return res;
};
module.exports = TV_PriceMaker;