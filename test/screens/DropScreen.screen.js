class DropScreen {
    get #dropText() { return $('android=new UiSelector().text("This button is active")') } // Para chegar nesse código ver documentação webdriverio
    //get #dropText(){ return $('//android.widget.LinearLayout/android.widget.Button[1])')}

    get #okButton() { return $('android=new UiSelector().index(2)') }  // seleciona o index 2

    async clickOk() { await this.#okButton.click() }
    async dropOK() { return await this.#dropText.getText() }
}

module.exports = new DropScreen
