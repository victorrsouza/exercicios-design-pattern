import { Cliente } from "../../src/01.adapter/cliente";
import { BancoDadosInterface } from "../../src/01.adapter/interfaces/banco-dados-interface";
import { BancoDadosAdapter } from "../../src/01.adapter/banco-dados-adapter";
import { BancoDadosLegado } from "../../src/01.adapter/banco-dados-legado";

describe('Adapter Testes', () => {

    let cliente : Cliente

    beforeEach(() => {        
        const legado : BancoDadosLegado = new BancoDadosLegado()
        const adapter : BancoDadosInterface = new BancoDadosAdapter(legado)
        cliente = new Cliente(adapter)
      });

    test('deve inserir com sucesso', () => {            
        //Given
        cliente.executaOperacaoInserir('registro')

        //When        
        const result = cliente.recuperarRegistros()

        //Then
        expect(result.length).toBe(1)
        expect(result[0]).toBe('registro')
    });    

    test('deve alterar com sucesso', () => {    
        //Given
        cliente.executaOperacaoInserir('registro')
        cliente.executaOperacaoAlterar('registro', 'registro2')

        //When        
        const result = cliente.recuperarRegistros()

        //Then
        expect(result.length).toBe(1)
        expect(result[0]).toBe('registro2')
    });

    test('deve excluir com sucesso', () => {
        //Given
        cliente.executaOperacaoInserir('registro1')
        cliente.executaOperacaoInserir('registro2')
        cliente.executaOperacaoInserir('registro3')
        cliente.executaOperacaoExcluir(0)

        //When        
        const result = cliente.recuperarRegistros()

        //Then
        expect(result.length).toBe(2)
        expect(result[0]).toBe('registro2')
        expect(result[1]).toBe('registro3')
    });
});

