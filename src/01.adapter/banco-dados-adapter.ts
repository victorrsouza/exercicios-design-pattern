import { BancoDadosInterface } from "./interfaces/banco-dados-interface";
import { BancoDadosLegado } from "./banco-dados-legado";

export class BancoDadosAdapter implements BancoDadosInterface {

    private readonly _legado : BancoDadosLegado

    constructor(legado : BancoDadosLegado) {
        this._legado = legado
    }
    
    inserir(valor: string): void {
        this._legado.inserirOuAtualizar(valor)
    }
    alterar(valorAntigo: string, valorNovo: string): void {
        this._legado.inserirOuAtualizar(valorNovo, valorAntigo)
    }
    excluir(indice: number): void {
        const valor = this._legado.recuperar()[indice]
        
        if (valor) {
            this._legado.deletar(valor)
        }
    }
    recuperar(): Array<string> {
        return this._legado.recuperar()
    }
    
}