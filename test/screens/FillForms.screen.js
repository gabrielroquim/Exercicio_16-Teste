class FillForms {
    get #enterFormsScreen() { return $('~Forms') }
    async EnterForms() { await this.#enterFormsScreen.click() }

    get #inputField() { return $('~text-input') }
    get #resultadoInput(){ return $('input-text-result')}
    async fillInputField(input) { await this.#inputField.setValue(input) } // o setValue, envia uma sequencia de elementos do teclado, documentaçã API webdririo
    async resultInpult(){ return await this.#resultadoInput.getTexto() }

    get #switchBtn() { return $('~switch') }
    get #resultadoSwitch(){ return $('switch-text')}
    async TicSwitch() { await this.#switchBtn.click() }
    async resultSwitch(){ await this.#resultadoSwitch()}

    get #dropDown() { return $('~Dropdown') }
    async goDrop() { await this.#dropDown.click() }
    get #dropTexto(){ return $('android=new UiSelector().text("webdriver.io is awesome")')}
    async resultadoDrop(){ return await this.#dropTexto.getTexto()}


    get #escolheDrop() { return $('id=android:id/text1') }
    async okAppium() { await this.#escolheDrop.click() }
    
    get #ativarBtn() {return $('//android.view.ViewGroup[@content-desc="button-Active"]')}
    async ativado() { await this.#ativarBtn.click()}
}

module.exports = new FillForms()