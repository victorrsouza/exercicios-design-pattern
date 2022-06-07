import { BancoDadosInterface } from "./interfaces/banco-dados-interface";

export class Cliente {

    private readonly _dbService : BancoDadosInterface

    constructor(dbService : BancoDadosInterface) {
        this._dbService = dbService
    }

    public executaOperacaoInserir(valor : string) : void {
        this._dbService.inserir(valor)
    }

    public executaOperacaoAlterar(valorAntigo : string, valorNovo : string) : void {
        this._dbService.alterar(valorAntigo, valorNovo)
    }

    public executaOperacaoExcluir(indice : number) : void {
        this._dbService.excluir(indice)
    }

    public recuperarRegistros() : Array<string> {
        return this._dbService.recuperar()
    }

}