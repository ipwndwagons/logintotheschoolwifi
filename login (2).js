const puppeteer = require('puppeteer');
var username = "username";
var password = "password";
(async function main() {
    const browser = await puppeteer.launch();
  try {
    const [page] = await browser.pages();
	console.log("running script")
    await page.goto('http://www.gstatic.com/generate_204',{waitUntil:'networkidle0'});
	console.log("loaded page");
    await page.type(`input[name="username"]`,username);
	console.log("typing username and password");
    await page.type(`input[name="password"]`,password);
    await page.click('input[value="Continue"]');
    console.log("done! :D");
    await browser.close();
  } catch (err) {
    if (err.message == `net::ERR_ABORTED at http://www.gstatic.com/generate_204`){
      console.log("already logged in :)");
      browser.close();
    } else {
      console.log(err);
      browser.close();
    }
}
})();