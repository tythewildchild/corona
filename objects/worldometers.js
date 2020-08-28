const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
get usaState() { return $$('#usa_table_countries_today > tbody tr td:nth-child(2)')}
get totalCases() { return $$('#usa_table_countries_today > tbody tr td:nth-child(3)'); }
get totalDeaths() { return $$('#usa_table_countries_today > tbody tr td:nth-child(5)'); }
get totalActive() { return $$('#usa_table_countries_today > tbody tr td:nth-child(8)'); }
get casesPerMillion() { return $$('#usa_table_countries_today > tbody tr td:nth-child(9)'); }
get deathsPerMillion() { return $$('#usa_table_countries_today > tbody tr td:nth-child(10)'); }
get totalTests() { return $$('#usa_table_countries_today > tbody tr td:nth-child(11)'); }
get population() { return $$('#usa_table_countries_today > tbody tr td:nth-child(13)'); }
    

    //CREATING DATA ARAYS
    statesArray() {
        let array = [];
        for(let i = 0; i < this.usaState.length; i++){
            array.push(this.usaState[i].getText());
        }
        // for(let i = 0; i < array.length; i++){
        //     console.log(array[i]);
        // }     
        return array;
    }

    totalCasesArray() {
        let array = [];
        for(let i = 0; i < this.totalCases.length; i++){
            array.push(this.totalCases[i].getText());
        }
        // for(let i = 0; i < array.length; i++){
        //     console.log(array[i]);
        // }     
        return array;
    }

    totalDeathsArray() {
        let array = [];
        for(let i = 0; i < this.totalDeaths.length; i++){
            array.push(this.totalDeaths[i].getText());
        }
        // for(let i = 0; i < array.length; i++){
        //     console.log(array[i]);
        // }     
        return array;
    }

    totalActiveArray() {
        let array = [];
        for(let i = 0; i < this.totalActive.length; i++){
            array.push(this.totalActive[i].getText());
        }
        // for(let i = 0; i < array.length; i++){
        //     console.log(array[i]);
        // }     
        return array;
    }

    casesPerMillionArray() {
        let array = [];
        for(let i = 0; i < this.casesPerMillion.length; i++){
            array.push(this.casesPerMillion[i].getText());
        }
        // for(let i = 0; i < array.length; i++){
        //     console.log(array[i]);
        // } 
        return array;
    }

    deathsPerMillionArray() {
        let array = [];
        for(let i = 0; i < this.deathsPerMillion.length; i++){
            array.push(this.deathsPerMillion[i].getText());
        }
        // for(let i = 0; i < array.length; i++){
        //     console.log(array[i]);
        // } 
        return array;
    }

    totalTestsArray(){
        let array = [];
        for(let i = 0; i < this.totalTests.length; i++){
            array.push(this.totalTests[i].getText());
        }
        // for(let i = 0; i < array.length; i++){
        //     console.log(array[i]);
        // } 
        return array;
    }

    populationArray(){
        let array = [];
        for(let i = 0; i < this.population.length; i++){
            array.push(this.population[i].getText());
        }
        // for(let i = 0; i < array.length; i++){
        //     console.log(array[i]);
        // } 
        return array;
    }



    //SORTING ARRAY 
    defaultArray(){
        let states = this.statesArray();
        let totalDeaths = this.totalDeathsArray();
        let totalCases = this.totalCasesArray();
        let casesPerMillion = this.casesPerMillionArray();
        let deathsPerMillion = this.deathsPerMillionArray();
        let newArray = [];

        for(let i = 0; i < states.length; i++){
            let string;
            if(states[i].length <= 7){
                string =states[i] + "\t\t\tTotal Deaths: " + totalDeaths[i] + "\tTotal Cases: " + totalCases[i] + "\tCases per Million: " 
                + casesPerMillion[i] + "\tDeaths per Million: " + deathsPerMillion[i];
            }
            else if(states[i].length <= 9 && states[i].length >= 8 ){
                string =states[i] + "\t\tTotal Deaths: " + totalDeaths[i] + "\tTotal Cases: " + totalCases[i] + "\tCases per Million: " 
                + casesPerMillion[i] + "\tDeaths per Million: " + deathsPerMillion[i];
            }
            else if(states[i] === "California"){
                string =states[i] + "\tTotal Deaths: " + totalDeaths[i] + "\tTotal Cases: " + totalCases[i] + "\tCases per Million: " 
                + casesPerMillion[i] + "\tDeaths per Million: " + deathsPerMillion[i];
            }
            else{
                string =states[i] + "\t\tTotal Deaths: " + totalDeaths[i] + "\tTotal Cases: " + totalCases[i] + "\tCases per Million: " 
                + casesPerMillion[i] + "\tDeaths per Million: " + deathsPerMillion[i];
            }

            if(
                string.includes('District') || string.includes('Northern Mariana') || string.includes('Puerto Rico') || string.includes('United States Virgin Islands') 
                || string.includes('US Military') || string.includes('Veteran Affairs') || string.includes('Federal Prisons') || string.includes('Guam')
                || string.includes('Navajo Nation') || string.includes('Grand Princess Ship') || string.includes('Wuhan Repatriated') || string.includes('Diamond Princess Ship')
              ){
                continue;
            }
            else{
                newArray.push(string);
            }
        }
        return newArray;
    }

    deathsPerMillionAscendingArray(){
        $('[aria-label="Deaths/1M pop: activate to sort column descending"]').click();
        browser.pause(1000);
        let states = this.statesArray();
        let totalDeaths = this.totalDeathsArray();
        let totalCases = this.totalCasesArray();
        let casesPerMillion = this.casesPerMillionArray();
        let deathsPerMillion = this.deathsPerMillionArray();
        let newArray = [];

        for(let i = 0; i < states.length; i++){
            let string;
            if(states[i].length <= 7){
                string =states[i] + "\t\t\tTotal Deaths: " + totalDeaths[i] + "\tTotal Cases: " + totalCases[i] + "\tCases per Million: " 
                + casesPerMillion[i] + "\tDeaths per Million: " + deathsPerMillion[i];
            }
            else if(states[i].length <= 9 && states[i].length >= 8 ){
                string =states[i] + "\t\tTotal Deaths: " + totalDeaths[i] + "\tTotal Cases: " + totalCases[i] + "\tCases per Million: " 
                + casesPerMillion[i] + "\tDeaths per Million: " + deathsPerMillion[i];
            }
            else if(states[i] === "California"){
                string =states[i] + "\t\tTotal Deaths: " + totalDeaths[i] + "\tTotal Cases: " + totalCases[i] + "\tCases per Million: " 
                + casesPerMillion[i] + "\tDeaths per Million: " + deathsPerMillion[i];
            }
            else if(states[i] === "New Jersey"){
                string =states[i] + "\tTotal Deaths: " + totalDeaths[i] + "\tTotal Cases: " + totalCases[i] + "\tCases per Million: " 
                + casesPerMillion[i] + "\tDeaths per Million: " + deathsPerMillion[i];
            }
            else{
                string =states[i] + "\t\tTotal Deaths: " + totalDeaths[i] + "\tTotal Cases: " + totalCases[i] + "\tCases per Million: " 
                + casesPerMillion[i] + "\tDeaths per Million: " + deathsPerMillion[i];
            }

            if(
                string.includes('District') || string.includes('Northern Mariana') || string.includes('Puerto Rico') || string.includes('United States Virgin Islands') 
                || string.includes('US Military') || string.includes('Veteran Affairs') || string.includes('Federal Prisons') || string.includes('Guam')
                || string.includes('Navajo Nation') || string.includes('Grand Princess Ship') || string.includes('Wuhan Repatriated') || string.includes('Diamond Princess Ship')
              ){
                continue;
            }
            else{
                newArray.push(string);
            }
        }
        return newArray;
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
