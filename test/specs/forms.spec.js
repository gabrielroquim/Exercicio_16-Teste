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
    //await FillFormsScreen.confirmarAct()
    $('~input-text-result').setValue('Teste')
    $('~switch-text').setValue('Click to turn the switch OFF')


    // O expect vai trazar o resultado esperado para validar o teste
    //expect(await FillFormsScreen.textoTyped()).toEqual('Teste')
    //expect(await FillFormsScreen.verificaSw()).toEqual('Click to turn the switch OFF')
    expect(await DropScreenScreen.buttonResult()).toEqual('This button is')
    //expect(await FillFormsScreen.verifiDrop()).toEqual('This button is')
   // expect(await DropScreenScreen.verifiDrop()).toEqual('This button is active')

  });

});
