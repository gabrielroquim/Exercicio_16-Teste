// para cada arquivo criado na pasta screen tem que ter o cons
const DropScreenScreen = require("../screens/DropScreen.screen");
const FillFormsScreen = require("../screens/FillForms.screen");
const HomePagScreen = require("../screens/HomePag.screen");
describe('Acessar Formulario', () => {
  it('Clicar em formulario', async () => {
    await HomePagScreen.enterForms()
    await FillFormsScreen.fillInputField('Teste')
    await FillFormsScreen.TicSwitch()
    await FillFormsScreen.goDrop()
    await FillFormsScreen.okAppium()
    await FillFormsScreen.ativado()
    await DropScreenScreen.clickOk()
   // $('~input-text-result').setValue('Teste')
     // não consegui usar expect
    expect(await DropScreenScreen.dropOK()).toEqual('This button is active')
    expect(await FillFormsScreen.textHeve()).toEqual('Teste')
 expect( await FillFormsScreen.clickTurnSwi()).toEqual('Click to turn the switch ON')


  });

});
