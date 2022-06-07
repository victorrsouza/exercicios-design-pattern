import { FormaAbstraction } from "./forma-abstraction";

export class Cliente {

    private readonly _forma : FormaAbstraction

    constructor(forma : FormaAbstraction) {
        this._forma = forma
    }

    mostrarDesenhoComCor() : string {
        return this._forma.desenharComCor()
    }
}