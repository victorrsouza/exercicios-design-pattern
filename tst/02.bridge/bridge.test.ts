import { CirculoAzul } from "../../src/02.bridge/circulo-azul";
import { CirculoVermelho } from "../../src/02.bridge/circulo-vermelho";
import { Cliente } from "../../src/02.bridge/cliente";
import { QuadradoAzul } from "../../src/02.bridge/quadrado-azul";
import { QuadradoVermelho } from "../../src/02.bridge/quadrado-vermelho";


describe('Bridge Testes', () => {

    test('deve desenhar Circulo Vermelho com sucesso', () => {
        //Given
        const forma = new CirculoVermelho()
        const cliente = new Cliente(forma)

        //When        
        const result = cliente.mostrarDesenhoComCor()

        //Then
        expect(result).toBe('Circulo Vermelho')
    });

    test('deve desenhar Circulo Azul com sucesso', () => {
        //Given
        const forma = new CirculoAzul()
        const cliente = new Cliente(forma)

        //When        
        const result = cliente.mostrarDesenhoComCor()

        //Then
        expect(result).toBe('Circulo Azul')
    });
    
    test('deve desenhar Quadrado Azul com sucesso', () => {
        //Given
        const forma = new QuadradoAzul()
        const cliente = new Cliente(forma)

        //When        
        const result = cliente.mostrarDesenhoComCor()

        //Then
        expect(result).toBe('Quadrado Azul')
    });

    test('deve desenhar Quadrado Vermelho com sucesso', () => {
        //Given
        const forma = new QuadradoVermelho()
        const cliente = new Cliente(forma)

        //When        
        const result = cliente.mostrarDesenhoComCor()

        //Then
        expect(result).toBe('Quadrado Vermelho')
    });

});

