let repeatCount = 0;
const maxRepeats = 500;
const delay = 100; // Configurable delay

function runSequence() {
  const clickTarget = document.querySelector('#galaxyHeader > form > span.galaxy_icons.prev.ipiHintable');
    {
    clickTarget.click();
  }
  
  // Wait for DOM updates
  setTimeout(() => {
    // Extract galaxy info
    const systemInput = document.querySelector('#system_input');
    if (systemInput) {
//      console.log(`Galaxy: ${systemInput.value}`);
    } else {
//      console.log('Galaxy input not found.');
    }
    
    // Extract crystal info - check debris1 through debris8
    let crystalFound = false;
    for (let i = 1; i <= 8; i++) {
      const element = document.querySelector(`#debris${i} > ul.ListLinks > li:nth-child(2)`);
      if (element) {
        const crystalText = element.textContent.trim();
        if (crystalText) { // Only log if there's actual content
          console.log(`Galaxy ${systemInput.value}: ${crystalText}`);
          crystalFound = true;
          break; // Stop at first found crystal
        }
      }
    }
    if (!crystalFound) {
//      console.log('No crystal data found');
    }
    
    repeatCount++;
    
    // Continue if under limit
    if (repeatCount < maxRepeats) {
      runSequence();
    } else {
      console.log(`Sequence completed. Total clicks: ${repeatCount}`);
    }
  }, delay);
}

// Start the sequence
runSequence();
