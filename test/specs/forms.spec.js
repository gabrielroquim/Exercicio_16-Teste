// para cada arquivo criado na pasta screen tem que ter o cons
const FillFormsScreen = require("../screens/FillForms.screen");
const HomePagScreen = require("../screens/HomePag.screen");

describe('Acessar Formulario', () => {
  it('Clicar em formulario', async () => {
    await HomePagScreen.clickForms();
    await FillFormsScreen.typeInputField('Teste');
    await FillFormsScreen.ticSwitch();
    await FillFormsScreen.abreDrop();
    await FillFormsScreen.dropTextConfirma();
    await FillFormsScreen.clickActive();
  

   // expect(await activeScreenScreen.textoDrop()).toEqual('This button is active')

    // expect(await FillFormsScreen.droptext()).toEqual('Appium is awesome')
    expect(await FillFormsScreen.dropTextConfirma()).toContain('webdriver.io is awesome')


  });

})