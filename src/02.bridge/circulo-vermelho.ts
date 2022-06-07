import { FormaInterface } from "./interfaces/forma-interface";

export class CirculoVermelho implements FormaInterface {
    desenharComCor(): string {
        return "Circulo Vermelho"
    }
}