export interface BancoDadosInterface {    
    inserir(valor : string) : void;
    alterar(valorAntigo: string, valorNovo: string) : void;
    excluir(indice : number) : void;
    recuperar() : Array<string>;
}