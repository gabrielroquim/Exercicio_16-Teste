class FillForms {
    get #enterFormsScreen() { return $('~Forms') }
    async EnterForms() { await this.#enterFormsScreen.click() }

    get #inputField() { return $('~text-input') }
   // get #inputField() { return $('//android.widget.EditText[@content-desc="text-input"]')}
    async fillInputField(input) { await this.#inputField.setValue(input) } // o setValue, envia uma sequencia de elementos do teclado, documentaçã API webdririo
    async textoInput() { return await this.#inputField.getText() }

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

   // get #dropActive() { return $('//android.widget.LinearLayout/android.widget.Button[1]') }
    // get #textoDrive() { return $("~ASK ME LATER") }
    //get  #textoDrive()   { return $('id=button3')()  }       
   

    // get #dropMsn() { return $('//android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[1]')}
    //async verifiDrop(){ return await this.#dropMsn.getText()}    
   // async #confirmarAct() { return await this.#dropActive.click() }


}

module.exports = new FillForms()