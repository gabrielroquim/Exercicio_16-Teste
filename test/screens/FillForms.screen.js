
class FillFormsScreen {

    get #inputField() { return $('//android.widget.EditText[@content-desc="text-input"]') }
    get #switch() { return $('~switch') }
    get #dropDown() { return $('~Dropdown') }
    //get #dropdownMenuText() { return $('~text1')}    
    get #dropdownMenuText() { return $('android=new UiSelector().text("webdriver.io is awesome")') }
    //get #dropdownMenuText() { return $('android=new UiSelector().index(1)') }
    get #clickconfirmaText() { return $('android=new UiSelector().index(1)') }
    get #btnActive() { return $('~button-Active') }
    get #clickDropActive() { return $('android=new UiSelector().text("OK")') }
    get #okButton(){ return $('android=new UiSelector().index(2)')}
    //get #clickOk() { return $('//android.widget.Button[3]') }

    async typeInputField(input) { await this.#inputField.setValue(input) } // o setValue, envia uma sequencia de elementos do teclado, documentaçã API webdririo  
    async ticSwitch() { await this.#switch.click() }
    async abreDrop() { await this.#dropDown.click() }
    async dropTextConfirma() {
        await this.#dropdownMenuText.waitForExist()
        return await this.#dropdownMenuText.getText()
    }
    async seleFrom() { await this.#clickconfirmaText.click() }
    async clickActive() { return await this.#btnActive.click() }
    async textDropActive() {
        await this.#clickDropActive.waitForExist()
       return await this.#clickDropActive.getText()
        //return await this.#clickDropActive.click()
    }
    async confirmaOk() {
        await this.#okButton.waitForExist()
        return await this.#okButton.click()
    }

}
module.exports = new FillFormsScreen


