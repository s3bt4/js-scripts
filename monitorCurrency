//
// This script is monitoring value 4.2580 and when this or higher value pops up, then it'll add a message in the console
// I use it to monitor currency on my internet banking account
//
(function() {
  const targetSelector = '#module-root > div > div > div > div > main > div > div:nth-child(2) > div > form > div > div:nth-child(2) > div > div > div > span.KiQqPHUdVKC5KBl2f7oW > span:nth-child(1)';
  const clickSelector = '#module-root > div > div > div > div > main > div > div:nth-child(2) > div > form > div > div:nth-child(1) > div > div > div.FnRMJRz5F9erKXC_5xls > span > button > span.ds__sc-13card0-1.dxVqUM > svg';

  const threshold = 4.2580;
  const monitorInterval = 2000; // check every 2 seconds
  const clickInterval = 60000;  // click every 1 minute
  const totalDuration = 10 * 60 * 1000; // 10 minutes

  let monitorTimer, clickTimer;
  const endTime = Date.now() + totalDuration;

  // Monitoring function
  function monitorValue() {
    const el = document.querySelector(targetSelector);
    if (!el) {
      console.log('Element not found');
      return;
    }
    const valueText = el.textContent.replace(',', '.').trim();
    const value = parseFloat(valueText);
    if (!isNaN(value)) {
      if (value >= threshold) {
        console.log('Value:', value);
      } else {
        console.log('no change');
      }
    } else {
      console.log('Value is not a number:', valueText);
    }
  }

  // Clicking function
  function clickButton() {
    const el = document.querySelector(clickSelector);
    if (el) {
      el.click();
      el.click();
      console.log('Clicked button twice');
    } else {
      console.log('Click target not found');
    }
  }

  // Start intervals
  monitorTimer = setInterval(() => {
    if (Date.now() > endTime) {
      clearInterval(monitorTimer);
      clearInterval(clickTimer);
      console.log('Monitoring stopped');
      return;
    }
    monitorValue();
  }, monitorInterval);

  clickTimer = setInterval(() => {
    clickButton();
  }, clickInterval);

  console.log('Monitoring started');
})();
