const { Builder, By, Key, util } = require("selenium-webdriver");
var webdriver = require("selenium-webdriver");
const assert = require("assert");

let driver = new webdriver.Builder().forBrowser("chrome").build();

it("Check Home Page", async function () {
  await driver.get("https://demoqa.com");
  driver.manage().window().maximize(); // Maximiize the Window Size
  var Title = await driver.getTitle();
  assert.equal("ToolsQA", Title);

  // Write a test script to click on the Forms card.

  await driver.findElement(By.xpath("//h5[text()='Forms']")).click(); // Xpath is //h5[text()="Forms"]

  // Write a test script to click on the Practice Form button

  await driver.findElement(By.xpath("//span[text()='Practice Form']")).click();

  // Finf the elements in Students Registration Form

  var PracticeForm = await driver
    .findElement(By.className("main-header"))
    .getText(); // ✔  passed test
  assert.equal(PracticeForm, "Practice Form");
});

it("Fill Practice Form", async function () {
  // using click() and sendKeys()

  //Name
  await driver.findElement(By.id("firstName")).sendKeys("Sameeksha");
  await driver.findElement(By.id("lastName")).sendKeys("Khadka");

  //Email

  await driver
    .findElement(By.id("userEmail"))
    .sendKeys("Sameeksha@protonmail.com");

  // Gender
  await driver.findElement(By.xpath("//label[@for='gender-radio-2']")).click();

  //Mobile Number
  await driver.findElement(By.id("userNumber")).sendKeys("9834567890");

  //Date of Birth - id : dateOfBirthInput
  await driver.findElement(By.id("dateOfBirthInput")).click(); // Main box of Date selector
  await driver
    .findElement(
      By.css(".react-datepicker__year-select > option:nth-child(101)")
    )
    .click(); //Year
  await driver
    .findElement(
      By.css(".react-datepicker__month-select > option:nth-child(1)")
    )
    .click(); //Month
  await driver
    .findElement(By.css("div.react-datepicker__day--027:nth-child(5)"))
    .click(); //Date

    // Subjects: css-selector >  .subjects-auto-complete__value-container, id :subjectsInput
  var subjects = await driver
    .findElement(By.id("subjectsInput"))
    .sendKeys("Selenium Automation Testing");

  // await driver.findElement(By.id("subjectsInput")).click();
  // await driver.findElement(By.css("subjects-auto-complete__placeholder css-1wa3eu0-placeholder")).click();
  // await driver.findElement(By.xpath("//div[text()='Maths']")).click();

  // Hobbies Checkbox
  //X-path for Music : label[@for='hobbies-checkbox-3']
  await driver
    .findElement(By.xpath("//label[@for='hobbies-checkbox-2']"))
    .click();
  await driver
    .findElement(By.xpath("//label[@for='hobbies-checkbox-3']"))
    .click();

  // Pictures
  await driver
    .findElement(By.id("uploadPicture"))
    .sendKeys(
      "/home/samee/Programming/AutomationTestingAssignment/img/rose.jpg"
    );

  // Current Address
  await driver
    .findElement(By.id("currentAddress"))
    .sendKeys("Kathmandu, Nepal");

  // Select State

  // Scrollable
  var stateScroll = await driver.findElement(By.id("state"));
  await driver.executeScript("arguments[0].scrollIntoView()", stateScroll);

  await driver.findElement(By.id("state")).click();

  // Trying to select Haryana But still working on it.
  // var stateName = await driver.findElement(By.id("react-select-3-option-2"));
  // await driver.executeScript("arguments[0].scrollIntoView()", stateName);

  await driver.findElement(By.id("react-select-3-option-0")).click(); //NCR

  // Select City
  // id for Delhi= react-select-4-option-0

  var cityScroll = await driver.findElement(By.id("city"));
  await driver.executeScript("arguments[0].scrollIntoView()", cityScroll);

  await driver.findElement(By.id("city")).click();

  var cityName = await driver.findElement(By.id("react-select-4-option-0"));
  await driver.executeScript("arguments[0].scrollIntoView()", cityName);

  await driver.findElement(By.id("react-select-4-option-0")).click(); //Delhi

  // driver.close(); //to close the browser after the task is completed.
});

// var stateScroll = await driver.findElement(By.id("state"));
// Error when you don't minimize :/
//  1) Fill Practice Form:
// ElementClickInterceptedError: element click intercepted: Element <div class=" css-2b097c-container" id="state">...</div> 
// is not clickable at point (433, 817). Other element would receive the click: <div>...</div>
// (Session info: chrome=99.0.4844.51)
/* This is not a problem as driver.manage().window().maximize(); is used and works fine when you don't change the screen size :P

// Error: Maybe because of ads...:/
// var cityName = await driver.findElement(By.id("react-select-4-option-0"));
// 1) Fill Practice Form:
// ElementClickInterceptedError: element click intercepted: Element 
// <div class=" css-1n7v3ny-option" id="react-select-4-option-0" tabindex="-1">...</div> 
// is not clickable at point (1185, 819). Other element would receive the click: <div>...</div>
// City :(