class HomePagScreen{

    get #FormsScreen() { return $('~Forms') }
    async clickForms() { await this.#FormsScreen.click() }
}
module.exports = new HomePagScreen