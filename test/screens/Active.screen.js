class ActiveScreen {
    get #dropText() { return $('android=new UiSelector().text("This button is active")') } // Para chegar nesse código ver documentação webdriverio
    get #okButton() { return $('android=new UiSelector().index(2)') }  // seleciona o index 2 que seria o ok

    async OkDrop() { await this.#okButton.click() }
    async textoDrop() { return await this.#dropText.getText() }
}


module.exports = new ActiveScreen