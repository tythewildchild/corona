const worldometers = require('../../objects/worldometers')

describe('webdriver.io page', () => {
    
    it('Goes to the Tracker Website', () => {
        browser.url('https://www.worldometers.info/coronavirus/country/us/')
    })

    it('Collects Data from the table', () => {
        // worldometers.statesArray();
        worldometers.totalDeathsArray();
        browser.pause(5000000);
    })

})