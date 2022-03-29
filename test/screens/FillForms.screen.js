class FillFormsScreen {

    get #inputField() { return $('//android.widget.EditText[@content-desc="text-input"]') }
    async typeInputField(input) { await this.#inputField.setValue(input) } // o setValue, envia uma sequencia de elementos do teclado, documentaçã API webdririo

    get #switch() { return $('~switch') }
    async ticSwitch() { await this.#switch.click() }


    get #dropDown() { return $('~Dropdown') }
    async abreDrop() { await this.#dropDown.click() }

    //get #dropdownMenuText() { return $('android=new UiSelector().text("webdriver.io is awesome")') }
    //async dropTextConfirma() { return await this.#dropdownMenuText.click() } 

    get #ativarBtn() { return $('~button-Active') }
    async ativado() { await this.#ativarBtn.click() }

 

}
module.exports = new FillFormsScreen


