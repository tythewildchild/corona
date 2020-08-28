const worldometers = require('../../objects/worldometers')
const { casesPerMillionArray } = require('../../objects/worldometers')

describe('webdriver.io page', () => {
    
    it('Goes to the Tracker Website', () => {
        browser.url('https://www.worldometers.info/coronavirus/country/us/')
    })

    it('Collects Data from the table and prints them', () => {
        // let array = worldometers.defaultArray();
        // for(let i = 0; i < array.length; i++){
        //     console.log(array[i]);
        // }
        
        let array = worldometers.deathsPerMillionAscendingArray();
        for(let i = 0; i < array.length; i++){
            console.log(array[i]);
        }

        browser.pause(5000000);
    })

})