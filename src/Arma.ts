export default class Arma {
    private nome: string;
    private dano: number;
    private descricao: string;
    
    constructor(nome: string, dano: number, descricao: string) {
        this.nome = nome;
        this.dano = dano;
        this.descricao = descricao;
    }

    public getNome(): string {
        return this.nome;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public getDano(): number {
        return this.dano;
    }

    public setDano(dano: number): void {
        if (dano >= 0) {
            this.dano = dano;
        } else {
            console.log("O dano não pode ser negativo");    
        }
    }
}
