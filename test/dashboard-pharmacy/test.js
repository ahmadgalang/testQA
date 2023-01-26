const {Builder, By} = require('selenium-webdriver');
require("chromedriver");

(async function helloSelenium() {
  let driver = await new Builder().forBrowser('chrome').build();

  await driver.manage().window().maximize() 

  await driver.get('https://www.rctiplus.com/');

  await driver.sleep(2000);

  let linkTV = await driver.findElement(By.xpath('//*[@id="navbarSupportedContent"]/ul/li[2]/a'));
  linkTV.click()

  

  driver.ex
})();