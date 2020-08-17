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
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
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
        for(let i = 0; i < array.length; i++){
            console.log(array[i]);
        }     
        return array;
    }

    casesPerMillionArray() {
        let array = [];
        for(let i = 0; i < this.casesPerMillion.length; i++){
            array.push(this.casesPerMillion[i].getText());
        }
        for(let i = 0; i < array.length; i++){
            console.log(array[i]);
        } 
        return array;
    }

    deathsPerMillionArray() {
        let array = [];
        for(let i = 0; i < this.deathsPerMillion.length; i++){
            array.push(this.deathsPerMillion[i].getText());
        }
        for(let i = 0; i < array.length; i++){
            console.log(array[i]);
        } 
        return array;
    }

    totalTestsArray(){
        let array = [];
        for(let i = 0; i < this.totalTests.length; i++){
            array.push(this.totalTests[i].getText());
        }
        for(let i = 0; i < array.length; i++){
            console.log(array[i]);
        } 
        return array;
    }

    populationArray(){
        let array = [];
        for(let i = 0; i < this.population.length; i++){
            array.push(this.population[i].getText());
        }
        for(let i = 0; i < array.length; i++){
            console.log(array[i]);
        } 
        return array;
    }


    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
