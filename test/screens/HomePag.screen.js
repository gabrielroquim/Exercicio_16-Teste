class HomePagScreen{

    get #enterFormsScreen() { return $('~Forms') }
    async enterForms() { await this.#enterFormsScreen.click() }

}

module.exports = new HomePagScreen