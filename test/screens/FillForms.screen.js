class FillForms {
    get #enterFormsScreen() { return $('~Forms') }
    async EnterForms() { await this.#enterFormsScreen.click() }

    get #inputField() { return $('~text-input') }
    async fillInputField(input) { await this.#inputField.setValue(input) } // o setValue, envia uma sequencia de elementos do teclado, documentaçã API webdririo
    async textoInput() {
        return await this.#inputField.getText()
    }

    get #switchBtn() { return $('~switch') }
    async TicSwitch() { await this.#switchBtn.click() }
    get #fillSwitch() { return $('~switch-text') }
    async verificaSw() { return await this.#fillSwitch.getText() }


    get #dropDown() { return $('~Dropdown') }
    async goDrop() { await this.#dropDown.click() }

    get #escolheDrop() { return $('id=android:id/text1') }
    async okAppium() { await this.#escolheDrop.click() }

    get #ativarBtn() { return $('//android.view.ViewGroup[@content-desc="button-Active"]') }
    async ativado() { await this.#ativarBtn.click() }

    // async textoDropAct() {
    //return await this.#dropActive.getText()
    //  }
      

    get #dropActive() { return $('//android.widget.LinearLayout/android.widget.Button[1]') }
    async confirmarAct() { await this.#dropActive.click() }

    get #validaDrop() { return $('//hierarchy/android.widget.FrameLayout')}
    async confimarDrop(){ return await this.#validaDrop.getText()}
   
  


}

module.exports = new FillForms()