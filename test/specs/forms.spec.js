const FillFormsScreen = require("../screens/FillForms.screen")
describe('Acessar Formulario', () => {
    it('Clicar em formulario', async () => {
        await FillFormsScreen.EnterForms()
        await FillFormsScreen.fillInputField('Teste')
        await FillFormsScreen.TicSwitch()
        await FillFormsScreen.goDrop()
        await FillFormsScreen.okAppium()
        await FillFormsScreen.ativado()
        await FillFormsScreen.confirmarAct()

        // O expect vai trazar o resultado esperado para validar o teste
        expect(await FillFormsScreen.textoInput()).toEqual('Teste')     
        expect(await FillFormsScreen.verificaSw()).toEqual('Click to turn the switch OFF')
        expect(await FillFormsScreen.confimarDrop()).toEqual('This button is')
        //expect(await FillFormsScreen.fillTexto()).toEqual('This button is active')
       
    });

});
