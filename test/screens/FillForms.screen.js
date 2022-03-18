class FillForms {
    get #enterFormsScreen() { return $('~Forms') }
    async EnterForms() { await this.#enterFormsScreen.click() }

    get #inputField() { return $('~text-input') }    
    async fillInputField(input) { await this.#inputField.setValue(input) } // o setValue, envia uma sequencia de elementos do teclado, documentaçã API webdririo
    async textoInput (){
        return await this.#inputField.getTexto()
    }

    get #switchBtn() { return $('~switch') }    
    async TicSwitch() { await this.#switchBtn.click() }
   

    get #dropDown() { return $('~Dropdown') }
    async goDrop() { await this.#dropDown.click() }
   // get #dropTexto(){ return $('android=new UiSelector().text("Appium is awesome")')}
   // async resultadoDrop(){ return await this.#dropTexto.getTexto()}


    get #escolheDrop() { return $('id=android:id/text1') }
    async okAppium() { await this.#escolheDrop.click() }
    
    get #ativarBtn() {return $('//android.view.ViewGroup[@content-desc="button-Active"]')}
    async ativado() { await this.#ativarBtn.click()}
   // get #botaoAtivado (){ return $ ('android=new UiSelector().text("This button is active")')}
    //async btnAtivado() { await this.#botaoAtivado()}
}

module.exports = new FillForms()