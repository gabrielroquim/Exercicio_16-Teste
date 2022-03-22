class FillForms {

    get #inputField() { return $('//android.widget.EditText[@content-desc="text-input"]') }
    async fillInputField(input) { await this.#inputField.setValue(input) } // o setValue, envia uma sequencia de elementos do teclado, documentaçã API webdririo

    get #switchBtn() { return $('~switch') }
    async TicSwitch() { await this.#switchBtn.click() }

    get #dropDown() { return $('~Dropdown') }
    async goDrop() { await this.#dropDown.click() }

    get #escolheDrop() { return $('id=android:id/text1') }
    async okAppium() { await this.#escolheDrop.click() }

    get #ativarBtn() { return $('//android.view.ViewGroup[@content-desc="button-Active"]') }
    async ativado() { await this.#ativarBtn.click() }

}

module.exports = new FillForms


