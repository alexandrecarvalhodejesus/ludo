import {JogadorModel} from "./jogador.model";
 
export class CaminhoJogo
{  
    constructor(
    public ContemEstrela: boolean,
    public ContemSeta: boolean,
    public Cor: string,
    public Altura: string,
    public Largura: string,
    public Jogadores: JogadorModel[] = [],
    public left: string,
    public top: string)
    {}
}