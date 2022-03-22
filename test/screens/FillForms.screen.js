class FillForms {

    get #inputField() { return $('//android.widget.EditText[@content-desc="text-input"]') }
    async fillInputField(input) { await this.#inputField.setValue(input) } // o setValue, envia uma sequencia de elementos do teclado, documentaçã API webdririo
    //get #haveTyped() { return $('~input-text-result') }
    get #haveTyped() { return $('//android.widget.TextView[@content-desc="input-text-result"]')}
    async textHeve() { return await this.#haveTyped.getText() }

    get #switchBtn() { return $('~switch') }
    async TicSwitch() { await this.#switchBtn.click() }

    get #textSwitch(){ return $('~switch-text')}
    async clickTurnSwi(){ return await this.#textSwitch.getText()}


    get #dropDown() { return $('~Dropdown') }
    async goDrop() { await this.#dropDown.click() }

    get #escolheDrop() { return $('id=android:id/text1') }
    async okAppium() { await this.#escolheDrop.click() }

    get #ativarBtn() { return $('//android.view.ViewGroup[@content-desc="button-Active"]') }
    async ativado() { await this.#ativarBtn.click() }

}

module.exports = new FillForms


