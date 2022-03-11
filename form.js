const { Builder, By, Key, util } = require("selenium-webdriver");
var webdriver = require("selenium-webdriver");
const assert = require("assert");

let driver = new webdriver.Builder().forBrowser("firefox").build();

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

  //   Subjects: css-selector >  .subjects-auto-complete__value-container, id :subjectsInput
  var subjects = await driver
    .findElement(By.id("subjectsInput"))
    .sendKeys("Selenium Automation Testing");

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

  // driver.close(); //to close the browser after the task is completed.
});
