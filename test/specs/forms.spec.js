const FillFormsScreen = require("../screens/FillForms.screen")
describe('Acessar Formulario', () => {
    it('Clicar em formulario', async () => {
        await FillFormsScreen.EnterForms()
        await FillFormsScreen.fillInputField('Teste')
        //expect ( await FillFormsScreen.)
        await FillFormsScreen.TicSwitch()
        await FillFormsScreen.goDrop()
        await FillFormsScreen.okAppium()            
        await FillFormsScreen.ativado()

        // O expect vai trazar o resultado esperado para validar o teste
        expect ( await FillFormsScreen.resultInpult()).toEqual('Teste')
        expect( await FillFormsScreen.resultSwitch()).toEqual('Click to turn the switch OFF')
        expect (await buttonScreen.buttonResult()).toEqual('This button is active')
        expect (await formScreen.getDropdownResult()).toEqual('webdriver.io is awesome')
       
        //expect( await FillFormsScreen.resultSwitch()).toEqual('webdriver.io is awesome')
       
    });
        
});
