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


// * Nesta linha em diante são as tentativas de seletores

    // get #dropActive() { return $('//android.widget.LinearLayout/android.widget.Button[1]') }
    // get #textoDrive() { return $("~ASK ME LATER") }
    //get  #textoDrive()   { return $('id=button3')()  }       

    // This button is  get #dropMsn() { return $('~This button is')}
    // get #dropMsn() { return $('~android:id/alertTitle')}
    //get #dropMsn() { return $('id=alertTitle')}
    // async verifiDrop(){ return await this.#dropMsn.getText()}    
    // async #confirmarAct() { return await this.#dropActive.click() }
    // get #inputField() { return $('~text-input') }

// get #haveTyped() { return $('~input-text-result') }

// get #haveTyped() { return $('//android.widget.TextView[@content-desc="input-text-result"]') }

 //async textoInput() { return await this.#inputField.getText() }
    //async textoTyped() { return await this.#haveTyped.getText() 

 // get #fillSwitch() { return $('~switch-text') }
    // async verificaSw() { return await this.#fillSwitch.getText() }
