
class FillFormsScreen {

    get #inputField() { return $('//android.widget.EditText[@content-desc="text-input"]') }
    get #switch() { return $('~switch') }
    get #dropDown() { return $('~Dropdown') }
    //get #dropdownMenuText() { return $('id:text1')}
    get #dropdownMenuText() { return $('android=new UiSelector().text("webdriver.io is awesome")') }
    get #btnActive() { return $('~button-Active') }

    async typeInputField(input) { await this.#inputField.setValue(input) } // o setValue, envia uma sequencia de elementos do teclado, documentaçã API webdririo  
    async ticSwitch() { await this.#switch.click() }
    async abreDrop() { await this.#dropDown.click() }
    async dropTextConfirma() {
         await this.#dropdownMenuText.waitForExist()
         return await this.#dropdownMenuText.click() 
    }
    async clickActive() { return await this.#btnActive.click() }


}
module.exports = new FillFormsScreen


