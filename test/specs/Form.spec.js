const FillFormsScreen = require("../screens/FillForms.screen");
const HomePagScreen = require("../screens/HomePag.screen");

describe('Acessar Formulario', () => {
  it('Clicar em formulario', async () => {
    await HomePagScreen.clickForms();
    await FillFormsScreen.typeInputField('Teste');
    await FillFormsScreen.ticSwitch();
    await FillFormsScreen.abreDrop();
    await FillFormsScreen.dropTextConfirma();
    await FillFormsScreen.seleFrom();
    await FillFormsScreen.clickActive();
    await FillFormsScreen.textDropActive()
    await FillFormsScreen.confirmaOk()
    

    // expect(await FillFormsScreen.droptext()).toEqual('Appium is awesome')
    expect(await FillFormsScreen.dropTextConfirma()).toEqual('webdriver.io is awesome')
    expect(await FillFormsScreen.textDropActive()).toContain('This button is')

  });

})