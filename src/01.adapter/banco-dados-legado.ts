export class BancoDadosLegado {

    private readonly _dbLegado : Array<string> = []

    public inserirOuAtualizar(valor : string, valorAntigo : string = null) : boolean {
        try {
            const index = valorAntigo 
                ? this._dbLegado.findIndex(e => e === valorAntigo)
                : -1

            index > -1
                ? this._dbLegado[index] = valor
                : this._dbLegado.push(valor)
            
            return true
        } catch {
            return false
        }
    }

    public deletar(valor : string) : boolean {
        try {
            const index = this._dbLegado.findIndex(e => e === valor)

            if (index < 0) {
                return false
            }
    
            this._dbLegado.splice(index, 1)
            
            return true
        } catch {
            return false
        }
    }

    public recuperar = () => this._dbLegado
    
}